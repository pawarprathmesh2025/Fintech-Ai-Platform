import Transaction from "../models/Transaction.js";
import Groq from "groq-sdk";

export const aiCopilot = async (req, res) => {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const { userQuestion } = req.body;

    if (!userQuestion) {
      return res.status(400).json({ message: "Please provide a question." });
    }

    console.log("Token User:", req.user.id);

const transactions = await Transaction.find({ userId: req.user.id });

console.log("Transactions:", transactions);
console.log("Transaction count:", transactions.length);

    let income = 0;
    let expenses = 0;
    const categoryTotals = {};

    transactions.forEach(t => {
      const amount = Math.abs(t.amount);

      if (t.type === "income") income += amount;

      if (t.type === "expense") {
        expenses += amount;

        const category = t.category.toLowerCase();
        categoryTotals[category] =
          (categoryTotals[category] || 0) + amount;
      }
    });

    const savings = income - expenses;

    // Backend Financial Logic
    const safeEMI = income * 0.15;
    const maxExpenseLimit = income * 0.5;

    const topCategory = Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])[0];

    // Prompt only for explanation
    const prompt = `
User asked: "${userQuestion}"

Financial summary:

Monthly Income: ₹${income}
Monthly Expenses: ₹${expenses}
Monthly Savings: ₹${savings}

Safe EMI Limit (15% rule): ₹${safeEMI}
Maximum Expense Limit (50% rule): ₹${maxExpenseLimit}

Top Spending Category:
${topCategory ? `${topCategory[0]} - ₹${topCategory[1]}` : "None"}

Your task:
Explain the user's financial situation in simple language and give helpful financial advice.
Do not invent new numbers.
Use only the provided data.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful financial copilot." },
        { role: "user", content: prompt }
      ]
    });

    const aiAdvice = completion.choices[0].message.content;

    res.json({
      userQuestion,
      income,
      expenses,
      savings,
      safeEMI,
      categoryTotals,
      topSpendingCategory: topCategory,
      aiAdvice
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};