const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = "your_jwt_secret";

// Middleware to verify JWT token
function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Add product to cart
router.post("/add", authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      cart = new Cart({ user: req.userId, products: [] });
    }

    const productExists = cart.products.find(
      (p) => p.product.toString() === productId
    );
    if (productExists) {
      productExists.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product to cart" });
  }
});

// View cart
router.get("/", authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to get cart" });
  }
});

module.exports = router;
