// models/menuItemModel.js
const mongoose = require("mongoose");

const toppingSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const fillingSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const menuItemSchema = new mongoose.Schema({
  name: String,
  basePrice: Number,
  toppings: [toppingSchema],
  fillings: [fillingSchema],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
