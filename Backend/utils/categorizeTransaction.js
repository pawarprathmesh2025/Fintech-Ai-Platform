export const categorizeTransaction = (merchant = "") => {

  const name = merchant.toLowerCase();

  // FOOD
  if (
    name.includes("swiggy") ||
    name.includes("zomato") ||
    name.includes("restaurant") ||
    name.includes("pizza") ||
    name.includes("burger")
  ) {
    return "Food";
  }

  // TRANSPORT
  if (
    name.includes("uber") ||
    name.includes("ola") ||
    name.includes("rapido") ||
    name.includes("metro") ||
    name.includes("petrol") ||
    name.includes("fuel")
  ) {
    return "Transport";
  }

  // SHOPPING
  if (
    name.includes("amazon") ||
    name.includes("flipkart") ||
    name.includes("myntra") ||
    name.includes("ajio")
  ) {
    return "Shopping";
  }

  // GROCERIES
  if (
    name.includes("bigbasket") ||
    name.includes("blinkit") ||
    name.includes("zepto") ||
    name.includes("grocery") ||
    name.includes("mart")
  ) {
    return "Groceries";
  }

  return "Others";
};