const express = require('express');
const db = require('./db');

const app = express();
const Pizza = require('./models/pizzaModel');

app.use(express.json());

app.get('/getPizzas', (req, res) => {
  Pizza.find({}, (err, docs) => {
    if(err) throw err;

    res.send(docs);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Work ' + port ));
