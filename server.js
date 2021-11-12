const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome');
})

app.listen(port, () => console.log('Server Work ' + port ));
