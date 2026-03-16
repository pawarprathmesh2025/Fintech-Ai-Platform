import Transaction from "../models/Transaction.js";

export const getFinancialHealth = async (req, res) => {

  try {

    // last 30 days date
    const lastMonth = new Date();
    lastMonth.setDate(lastMonth.getDate() - 30);

    // fetch only recent transactions
    const transactions = await Transaction.find({
      userId: req.user.id,
      createdAt: { $gte: lastMonth }
    });

    let income = 0;
    let expenses = 0;

    transactions.forEach(t => {

      const amount = Math.abs(t.amount);

      if (t.type === "income") income += amount;
      if (t.type === "expense") expenses += amount;

    });

    const savings = income - expenses;

    let savingsRate = 0;

    if (income > 0) {
      savingsRate = ((savings / income) * 100).toFixed(1);
    }

    let score = 0;

    if (savingsRate >= 40) score = 90;
    else if (savingsRate >= 30) score = 80;
    else if (savingsRate >= 20) score = 70;
    else if (savingsRate >= 10) score = 60;
    else score = 40;

    let status = "";

    if (score >= 85) status = "Excellent";
    else if (score >= 70) status = "Good";
    else if (score >= 50) status = "Average";
    else status = "Poor";

    res.json({
      income,
      expenses,
      savings,
      savingsRate,
      financialHealthScore: score,
      status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};