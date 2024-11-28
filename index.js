const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');
const db = require('./db/db')

dotenv.config();
const app = express();
app.use(bodyParser.json());

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

