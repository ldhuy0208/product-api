const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    validate(value) {
      if (value && value < 0) {
        throw new Error('quantity cannot less than 0');
      }
    },
  },
});

module.exports = Product;
