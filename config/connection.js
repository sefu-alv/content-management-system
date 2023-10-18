// connects to my sql
const mysql = require('mysql2');
require('dotenv').config();
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
    //   password and username are hidden form sight
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'employees'
    },
   
  );
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the employees database.');
    }
  });
  module.exports = db;