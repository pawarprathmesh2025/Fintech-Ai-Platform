import Transaction from "../models/transaction.js";

/*
----------------------------------------
Add Transaction
POST /api/transactions
----------------------------------------
*/

export const addTransaction = async (req, res) => {
  try {

    const { merchant, amount, type, category, date } = req.body;

    if (!merchant || !amount || !type || !category) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const transaction = await Transaction.create({
      userId: req.user.id,
      merchant,
      amount,
      type,
      category,
      source: "manual",
      date: date || Date.now()
    });

    res.status(201).json({
      success: true,
      transaction
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



/*
----------------------------------------
Get Transactions
GET /api/transactions
----------------------------------------
*/

export const getTransactions = async (req, res) => {

  try {

    const transactions = await Transaction.find({
      userId: req.user.id
    }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};