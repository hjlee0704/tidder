const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  database: 'groceries'
});

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to database.');
  }
});

module.exports = db;