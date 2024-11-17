const carbonScores = { TShirt: 5.0, Jeans: 12.0, Shirt: 8.0 };

const calculateCarbonScore = (items) => {
  return items.reduce((total, item) => total + (carbonScores[item] || 10.0), 0);
};

const calculateEcoPoints = (totalCarbonScore) => {
  return Math.max(100 - totalCarbonScore * 10, 0);
};

module.exports = { calculateCarbonScore, calculateEcoPoints };
