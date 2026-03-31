// controllers/dashboardController.js

import Transaction from "../models/transaction.js";
import {
  calculateFinancialSummary,
  calculateCategoryBreakdown,
  calculateMonthlyTrend,
  calculateRiskScore,
  generateAiInsight,
} from "../services/analyticsServices.js";

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/dashboard
// Returns complete dashboard data for the logged-in user
// ─────────────────────────────────────────────────────────────────────────────
export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch ALL transactions for this user
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });

    // ── Calculations ──────────────────────────────────────────────────────────
    const { totalIncome, totalExpenses, savings, netWorth, savingsRate } =
      calculateFinancialSummary(transactions);

    const categoryBreakdown = calculateCategoryBreakdown(transactions);
    const monthlyTrend = calculateMonthlyTrend(transactions);
    const riskScore = calculateRiskScore(totalIncome, totalExpenses, savings);
    const aiInsight = generateAiInsight(transactions);

    // Recent 5 transactions
    const recentTransactions = transactions.slice(0, 5);

    // Source breakdown (how many came from manual / csv / bank)
    const sourceBreakdown = {
      manual: transactions.filter((t) => t.source === "manual").length,
      csv:    transactions.filter((t) => t.source === "csv").length,
      bank:   transactions.filter((t) => t.source === "bank").length,
    };

    // ── Response ──────────────────────────────────────────────────────────────
    res.status(200).json({
      summary: {
        netWorth,
        totalIncome,
        totalExpenses,
        savings,
        savingsRate,                        // % of income saved
        totalTransactions: transactions.length,
      },
      riskScore,                            // { score: 78, status: "Good" }
      categoryBreakdown,                    // [{ category, amount }]
      monthlyTrend,                         // [{ month, income, expenses }]
      recentTransactions,                   // last 5 transactions
      sourceBreakdown,                      // { manual, csv, bank }
      aiInsight,                            // string message
    });
  } catch (error) {
    console.error("Dashboard error:", error.message);
    res.status(500).json({ message: "Failed to load dashboard data" });
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/dashboard/summary
// Lightweight — only the top summary cards (faster load)
// ─────────────────────────────────────────────────────────────────────────────
export const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const transactions = await Transaction.find({ userId });

    const { totalIncome, totalExpenses, savings, netWorth, savingsRate } =
      calculateFinancialSummary(transactions);

    res.status(200).json({
      netWorth,
      totalIncome,
      totalExpenses,
      savings,
      savingsRate,
    });
  } catch (error) {
    console.error("Summary error:", error.message);
    res.status(500).json({ message: "Failed to load summary" });
  }
};