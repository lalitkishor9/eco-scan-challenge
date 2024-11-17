const { calculateCarbonScore, calculateEcoPoints } = require("../utils/calculateScores");
const { processImageBuffer } = require("../services/imageProcessor");

const imageResults = new Map();

const processImage = async (req, res) => {
    console.log("File received:", req.file);
  try {
    console.log(req.file);
    const { buffer } = req.file;
    // Simulate image processing to recognize items
    const recognizedItems = processImageBuffer(buffer);

    // Calculate scores
    const totalCarbonScore = calculateCarbonScore(recognizedItems);
    const ecoRewardPoints = calculateEcoPoints(totalCarbonScore);

    // Store results
    const resultId = Date.now();
    imageResults.set(resultId, { totalCarbonScore, ecoRewardPoints, recognizedItems });

    res.status(200).json({ resultId, totalCarbonScore, ecoRewardPoints, recognizedItems });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Failed to process image" });
  }
};

module.exports = { processImage };
