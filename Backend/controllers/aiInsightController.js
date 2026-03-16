import Transaction from "../models/Transaction.js";
import Groq from "groq-sdk";

export const getAIInsights = async (req, res) => {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    // Fetch all transactions for the user
    const transactions = await Transaction.find({ userId: req.user.id });

    let income = 0;
    let expenses = 0;
    const categoryTotals = {}; // New: store category-wise expenses

    transactions.forEach(t => {
      const amount = Math.abs(t.amount);

      if (t.type === "income") {
        income += amount;
      }

      if (t.type === "expense") {
        expenses += amount;

        // Calculate category totals
        if (!categoryTotals[t.category]) {
          categoryTotals[t.category] = 0;
        }
        categoryTotals[t.category] += amount;
      }
    });

    const savings = income - expenses;

    // Convert category totals to readable text
    const categoryText = Object.entries(categoryTotals)
      .map(([cat, amt]) => `${cat}: ₹${amt}`)
      .join("\n");

    // Updated prompt with category-wise spending
    const prompt = `
User financial data:

Income: ₹${income}
Expenses: ₹${expenses}
Savings: ₹${savings}

Category Spending:
${categoryText}

Provide financial insights and suggestions to improve savings and financial health.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a professional financial advisor." },
        { role: "user", content: prompt }
      ]
    });

    const insight = completion.choices[0].message.content;

    res.json({
      income,
      expenses,
      savings,
      categoryTotals,
      aiInsight: insight
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};