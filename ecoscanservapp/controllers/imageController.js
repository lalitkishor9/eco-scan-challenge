const fs = require("fs");
const path = require("path");
const { calculateCarbonScore, calculateEcoPoints } = require("../utils/calculateScores");
const { processImageWithGPT } = require("../services/imageProcessor");

const imageResults = new Map();

const processImage = async (req, res) => {
    console.log("File received:", req.file);
  try {
    // const filePath = path.resolve(req.file.path);
    // const imageBase64 = fs.readFileSync(filePath, { encoding: "base64" });
    const imageBase64= req.file.buffer.toString('base64')

    // Process image using GPT-4
    const recognizedItems = await processImageWithGPT(imageBase64);

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
