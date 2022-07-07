const express = require('express');
const db = require('./db');
const app = express();

// Import rotas
const pizzaRouter = require('./routes/pizzasRoute');



app.use(express.json());


app.use('/api/v1/pizzas', pizzaRouter);

app.get('/', (req, res) => {
  res.send('Welcome!!!!')
});

const PORT = process.env.PORT  || 5000;

app.listen(PORT, () => console.log('Server work! ', PORT));
