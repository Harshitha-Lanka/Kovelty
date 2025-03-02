require("dotenv").config(); // Load environment variables at the top
console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
