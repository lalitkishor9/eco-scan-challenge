const express = require("express");
const multer = require("multer");
const imageRoutes = require("./routes/imageRoutes");
const cors = require("cors");
const app = express();
app.use(cors());

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/images", upload.single("image"), imageRoutes);
app.get("/", (req, res)=>{
    return res.send("Welcome to EcoScan");
})
module.exports = app;
