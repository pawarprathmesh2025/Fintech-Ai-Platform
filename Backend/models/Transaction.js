import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  merchant: String,

  amount: Number,

  type: {
    type: String,
    enum: ["income", "expense"]
  },

  category: String,

  source: {
    type: String,
    enum: ["manual", "csv", "bank"]
  },

  date: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);