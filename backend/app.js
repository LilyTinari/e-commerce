const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/shopping-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

module.exports = app;
