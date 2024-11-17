const express = require("express");
const { processImage } = require("../controllers/imageController");

const router = express.Router();

// POST route for image upload
router.post("/upload", processImage);

module.exports = router;
