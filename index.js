const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');
const mysql = require('mysql2');

dotenv.config();
const app = express();
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

app.use('/api/schools', schoolRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = db; 
