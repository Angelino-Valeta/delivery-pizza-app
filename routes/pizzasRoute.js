const express = require("express");
const router = express.Router();
const Pizza = require("./../models/pizzaModel");

router.get("/", async (req, res) => {

  try {
    const pizzas = await Pizza.find();
    res.status(200).json({
      message: "Success",
      data: pizzas,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
