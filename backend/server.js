
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. CONNECT TO MONGODB
mongoose
  .connect("mongodb://localhost:27017/SimpleReviewApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// 2. DEFINE SCHEMAS & MODELS (Example)
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model("User", userSchema);

const reviewSchema = new mongoose.Schema({
  review: String,
  user: String,
  date: { type: Date, default: Date.now }
});
const Review = mongoose.model("Review", reviewSchema);

// 3. ROUTES
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  // Check user in DB
  const user = await User.findOne({ username, password });
  if (user) {
    return res.json({ success: true, message: "Login successful!" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.post("/api/reviews", async (req, res) => {
  const { review, user } = req.body;
  // Save review in MongoDB
  const newReview = new Review({ review, user });
  await newReview.save();
  return res.json({ success: true, message: "Review saved!" });
});

app.get("/api/reviews", async (req, res) => {
  const reviews = await Review.find().sort({ date: -1 });
  return res.json({ reviews });
});

// 4. START SERVER
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
