import Groq from "groq-sdk";

// ===============================
// SIMULATE SINGLE GOAL
// ===============================
export const simulateGoal = async (req, res) => {
  try {

    const { goal, price, downPayment = 0, salary, tenureMonths = 12, interestRate = 0 } = req.body;

    if (!goal || !price || !salary) {
      return res.status(400).json({ message: "Goal, price, and salary are required." });
    }

    const principal = price - downPayment;
    const monthlyRate = interestRate / 12 / 100;

    let emi = 0;
    let monthlySavingNeeded = 0;

    // EMI Calculation
    if (interestRate > 0) {
      emi = Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      );
    } else {
      monthlySavingNeeded = Math.round(principal / tenureMonths);
    }

    const amount = emi || monthlySavingNeeded;

    const emiPercent = ((amount / salary) * 100).toFixed(1);

    const affordable = emiPercent <= 35;

    // ===============================
    // RISK SCORE LOGIC
    // ===============================

    let riskScore = 0;
    let riskLevel = "";

    if (emiPercent <= 20) {
      riskScore = 90;
      riskLevel = "Low";
    } 
    else if (emiPercent <= 35) {
      riskScore = 70;
      riskLevel = "Moderate";
    } 
    else if (emiPercent <= 50) {
      riskScore = 40;
      riskLevel = "High";
    } 
    else {
      riskScore = 20;
      riskLevel = "Very High";
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const prompt = `
User wants to ${goal} for ₹${price} with ₹${downPayment} down payment.
Their monthly salary is ₹${salary}.

${interestRate > 0 
  ? `The EMI is ₹${emi} over ${tenureMonths} months at ${interestRate}% interest.` 
  : `Monthly saving needed is ₹${monthlySavingNeeded} over ${tenureMonths} months.`}

EMI consumes ${emiPercent}% of salary.

Provide short financial advice:
- Is this goal affordable?
- Any tips to reduce EMI or save more?
- Mention financial risks if any.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a professional financial advisor." },
        { role: "user", content: prompt }
      ]
    });

    const aiAdvice = completion.choices[0].message.content;

    res.json({
      goal,
      emi: emi || null,
      monthlySavingNeeded: monthlySavingNeeded || null,
      emiPercent: parseFloat(emiPercent),
      affordable,
      riskScore,
      riskLevel,
      aiAdvice
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// ===============================
// COMPARE MULTIPLE GOALS
// ===============================
export const compareGoals = async (req, res) => {
  try {

    const { goals, salary } = req.body;

    if (!goals || !Array.isArray(goals) || goals.length === 0 || !salary) {
      return res.status(400).json({ message: "Goals array and salary are required." });
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const comparison = [];

    for (let g of goals) {

      const { goal, price, downPayment = 0, tenureMonths = 12, interestRate = 0 } = g;

      const principal = price - downPayment;

      const monthlyRate = interestRate / 12 / 100;

      let emi = 0;
      let monthlySavingNeeded = 0;

      if (interestRate > 0) {

        emi = Math.round(
          (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
          (Math.pow(1 + monthlyRate, tenureMonths) - 1)
        );

      } else {

        monthlySavingNeeded = Math.round(principal / tenureMonths);

      }

      const amount = emi || monthlySavingNeeded;

      const emiPercent = ((amount / salary) * 100).toFixed(1);

      const affordable = emiPercent <= 35;

      // ===============================
      // RISK SCORE LOGIC
      // ===============================

      let riskScore = 0;
      let riskLevel = "";

      if (emiPercent <= 20) {
        riskScore = 90;
        riskLevel = "Low";
      } 
      else if (emiPercent <= 35) {
        riskScore = 70;
        riskLevel = "Moderate";
      } 
      else if (emiPercent <= 50) {
        riskScore = 40;
        riskLevel = "High";
      } 
      else {
        riskScore = 20;
        riskLevel = "Very High";
      }

      comparison.push({
        goal,
        emi: emi || null,
        monthlySavingNeeded: monthlySavingNeeded || null,
        emiPercent: parseFloat(emiPercent),
        affordable,
        riskScore,
        riskLevel,
        type: interestRate > 0 ? "loan" : "saving"
      });

    }

    // ===============================
    // AI COMPARISON ADVICE
    // ===============================

    let promptText = `Compare the following financial goals for a user with monthly salary ₹${salary}:\n\n`;

    comparison.forEach(c => {

      if (c.type === "loan") {
        promptText += `${c.goal}: EMI ₹${c.emi} (${c.emiPercent}% of salary) Risk Level: ${c.riskLevel}\n`;
      } else {
        promptText += `${c.goal}: Monthly saving ₹${c.monthlySavingNeeded} (${c.emiPercent}% of salary) Risk Level: ${c.riskLevel}\n`;
      }

    });

    promptText += `\nProvide advice on affordability, prioritization, and risk for these goals.`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a professional financial advisor." },
        { role: "user", content: promptText }
      ]
    });

    const aiAdvice = completion.choices[0].message.content;

    res.json({
      comparison,
      aiAdvice
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};