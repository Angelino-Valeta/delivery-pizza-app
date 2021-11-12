const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mern-pizza';

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongo DB Conneted');
});

db.on('error', () => {
  console.log('Error, on connection with mongo db');
});

module.export = mongoose
