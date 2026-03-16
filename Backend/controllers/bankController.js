import Transaction from "../models/Transaction.js";

export const syncBankTransactions = async (req, res) => {
  try {

    const mockTransactions = [
      {
        userId: req.user.id,
        merchant: "Amazon",
        amount: 1200,
        type: "expense",
        category: "Shopping",
        source: "bank"
      },
      {
        userId: req.user.id,
        merchant: "Uber",
        amount: 350,
        type: "expense",
        category: "Transport",
        source: "bank"
      },
      {
        userId: req.user.id,
        merchant: "Swiggy",
        amount: 450,
        type: "expense",
        category: "Food",
        source: "bank"
      },
      {
        userId: req.user.id,
        merchant: "Netflix",
        amount: 499,
        type: "expense",
        category: "Entertainment",
        source: "bank"
      },
      {
        userId: req.user.id,
        merchant: "Salary Credit",
        amount: 85000,
        type: "income",
        category: "Salary",
        source: "bank"
      }
    ];

    await Transaction.insertMany(mockTransactions);

    res.json({
      message: "Bank transactions synced successfully",
      count: mockTransactions.length
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};