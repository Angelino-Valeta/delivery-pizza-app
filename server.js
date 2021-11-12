const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

// Routas
const pizzaRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Work " + port));
