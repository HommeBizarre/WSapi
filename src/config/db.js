import mysql from "mysql"

// CONNECT TO DATABASE
let db = mysql.createConnection({
  host: 'weather-station.leakim.fr',
  user: 'weather-station',
  password: '$Weather-Station$',
  database: 'weatherdb'
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

export default db;