// services/analyticsService.js

// ─── 1. CORE FINANCIAL SUMMARY ────────────────────────────────────────────────
export const calculateFinancialSummary = (transactions) => {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") totalIncome += t.amount;
    else if (t.type === "expense") totalExpenses += t.amount;
  });

  const savings = totalIncome - totalExpenses;
  const netWorth = savings;
  const savingsRate =
    totalIncome > 0
      ? parseFloat(((savings / totalIncome) * 100).toFixed(1))
      : 0;

  return { totalIncome, totalExpenses, savings, netWorth, savingsRate };
};

// ─── 2. CATEGORY BREAKDOWN (for pie / bar chart) ──────────────────────────────
export const calculateCategoryBreakdown = (transactions) => {
  const breakdown = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const cat = t.category || "Other";
      breakdown[cat] = (breakdown[cat] || 0) + t.amount;
    });

  return Object.entries(breakdown)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
};

// ─── 3. MONTHLY TREND (last 6 months, for line chart) ────────────────────────
export const calculateMonthlyTrend = (transactions) => {
  const monthMap = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!monthMap[key]) {
      monthMap[key] = { month: key, income: 0, expenses: 0 };
    }

    if (t.type === "income") monthMap[key].income += t.amount;
    else monthMap[key].expenses += t.amount;
  });

  return Object.values(monthMap)
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-6);
};

// ─── 4. RISK / HEALTH SCORE (0–100) ──────────────────────────────────────────
export const calculateRiskScore = (totalIncome, totalExpenses, savings) => {
  if (totalIncome === 0) return { score: 0, status: "No Data" };

  const savingsRate = savings / totalIncome;
  const expenseRatio = totalExpenses / totalIncome;

  const savingsScore = Math.min(savingsRate / 0.3, 1) * 40;        // max 40 pts
  const expenseScore = Math.max(1 - expenseRatio / 0.8, 0) * 40;   // max 40 pts
  const baseScore = 20;

  const score = Math.min(
    Math.max(Math.round(baseScore + savingsScore + expenseScore), 0),
    100
  );

  const status =
    score >= 80 ? "Excellent" :
    score >= 60 ? "Good" :
    score >= 40 ? "Average" : "Needs Attention";

  return { score, status };
};

// ─── 5. AI INSIGHT MESSAGE ────────────────────────────────────────────────────
export const generateAiInsight = (transactions) => {
  if (transactions.length === 0) {
    return "Add your first transaction to get personalized financial insights.";
  }

  const now = new Date();
  const currMonth = now.getMonth();
  const currYear = now.getFullYear();
  const prevMonth = currMonth === 0 ? 11 : currMonth - 1;
  const prevYear = currMonth === 0 ? currYear - 1 : currYear;

  const currSpend = {};
  const prevSpend = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const d = new Date(t.date);
      const cat = t.category || "Other";

      if (d.getMonth() === currMonth && d.getFullYear() === currYear) {
        currSpend[cat] = (currSpend[cat] || 0) + t.amount;
      } else if (d.getMonth() === prevMonth && d.getFullYear() === prevYear) {
        prevSpend[cat] = (prevSpend[cat] || 0) + t.amount;
      }
    });

  // Find biggest spending increase vs last month
  let topCategory = null;
  let topPct = 0;

  for (const cat in currSpend) {
    const prev = prevSpend[cat] || 0;
    if (prev > 0) {
      const pct = ((currSpend[cat] - prev) / prev) * 100;
      if (pct > topPct) {
        topPct = pct;
        topCategory = { name: cat, pct: Math.round(pct), amount: currSpend[cat] };
      }
    }
  }

  if (topCategory && topCategory.pct > 10) {
    return `You spent ${topCategory.pct}% more on ${topCategory.name} this month (₹${topCategory.amount.toLocaleString("en-IN")}). Consider reviewing your ${topCategory.name.toLowerCase()} expenses.`;
  }

  // Fallback: savings insight
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const rate =
    totalIncome > 0
      ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100)
      : 0;

  if (rate >= 30)
    return `Great job! You're saving ${rate}% of your income. Consider investing your surplus for long-term growth.`;
  if (rate >= 15)
    return `You're saving ${rate}% of your income. Aim for 30% to build a stronger financial cushion.`;
  return `Your savings rate is ${rate}%. Review your top expense categories to find areas to cut back.`;
};