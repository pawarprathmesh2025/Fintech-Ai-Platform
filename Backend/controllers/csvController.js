import fs from "fs";
import csv from "csv-parser";
import Transaction from "../models/Transaction.js";
import { categorizeTransaction } from "../utils/categorizeTransaction.js";

export const uploadCSV = async (req, res) => {

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {

      let inserted = 0;

      for (const row of results) {

        const merchant = row.Description || row.Merchant;
        const amount = Number(row.Amount);
        const date = new Date(row.Date);

        const transaction = {
          userId: req.user.id,
          merchant,
          amount,
          date,
          type: amount > 0 ? "income" : "expense",
          category: categorizeTransaction(merchant),
          source: "csv"
        };

        const exists = await Transaction.findOne({
          userId: req.user.id,
          merchant,
          amount,
          date
        });

        if (!exists) {
          await Transaction.create(transaction);
          inserted++;
        }

      }

      fs.unlinkSync(req.file.path);

      res.json({
        message: "CSV processed successfully",
        inserted,
        skipped: results.length - inserted
      });

    });

};