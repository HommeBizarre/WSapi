const { request, response } = require("express");
const express = require("express");
const bdd = require('mysql');
const app = express();
const port = 8080;
const date = require('date-and-time');
exports.app = app;
app.use(express.json());

// CONNECT TO DATABASE
let connection = bdd.createConnection({
  host: 'weather-station.leakim.fr',
  user: 'weather-station',
  password: '$Weather-Station$',
  database: 'weatherdb'
});


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});


// POST - CREATE MEASURE
app.post("/api/create_measure", (request, response) => {
  const date_now = date.format(new Date(),'YYYY-MM-DD HH:mm:ss');
  let sql_insert = `INSERT INTO weatherdb.measure (\`tempC\`,\`tempF\`,\`pressurehPA\`,\`pressurePSI\`,\`humidity\`,\`measure_created_at\`,\`device_id\`) \
   VALUES (${request.body.tempC},${request.body.tempF},${request.body.pressurehPA},${request.body.pressurePSI},${request.body.humidity},"${date_now}" ,${request.query.id_device});`;
   var resp = {};
   resp.code = 201;
   resp.message = `The request was successfully received - Created a new measure on device with id=${request.query.id_device}`;
      connection.query(sql_insert,function (err, results, fields) {  
        if(err) {
          resp.code = 400;  
          resp.message = err.sqlMessage;
         }
        response.send(resp);
    });  

  });


// GET - LAST MEASURE
app.get("/api/last_measure", (request, response) => {
  const device_id=request.query.id_device;
  let sql_select_last = `SELECT * FROM weatherdb.measure WHERE device_id=${device_id} ORDER BY \`measure_created_at\` DESC LIMIT 1`;
  var resp = {};
     resp.code = 200;
     resp.message = "The request was successfully received - Get the last measure";    
      connection.query(sql_select_last,function (err, results, fields) {  
        if(err) {
          resp.code = 400;  
          resp.message = err.sqlMessage;
         }
        response.send(resp);
      });
});


// GET - ALL MEASURE
app.get("/api/all_measure", (request, response) => {
  const device_id = request.query.id_device;
  let sql_select_all = `SELECT * FROM weatherdb.measure WHERE device_id=${device_id}`;
  var resp = {};
  resp.code = 200;
  resp.message = `The request was successfully received - Get all measures from device with id=${request.query.id_device}`;
  connection.query(sql_select_all, function (err, results, fields) {
    if(err) {
      resp.code = 400;  
      resp.message = err.sqlMessage;
     }
     response.send(resp);
  });
});


// POST - ADD DEVICE
app.post("/api/add_device", (request, response) => {
    let sql_insert_device = `INSERT INTO weatherdb.device (raspberry_id, id, name, address) VALUES (${request.body.raspberry_id},${request.body.id},"${request.body.name}","${request.body.address}");`;
    var resp = {};
    resp.code = 201;
    resp.message = `The request was successfully received - Add a new device with id=${request.body.id}`;
      connection.query(sql_insert_device,function (err, results, fields) {  
       if(err) {
        resp.code = 400;  
        resp.message = err.sqlMessage;
       }
       response.send(resp);
      });  
  });


// DELETE - ERASE DEVICE
app.post("/api/erase_device", (request, response) => {
  let sql_delete_device = `DELETE FROM weatherdb.device WHERE id=${request.query.id_device}`; 
  var resp = {};
  resp.code = 201;
  resp.message = `The request was successfully received - Erase a device with id=${request.query.id_device}`;
    connection.query(sql_delete_device,function (err, results, fields) {  
      if(err) { 
        resp.code = 400;  
        resp.message = err.sqlMessage;
       }
      response.send(resp);
  });  
});


// UPDATE DEVICE - ACTIVE / DISABLED
app.post("/api/update_device", (request, response) => {
  const device_id=request.query.id_device;
  let sql_insert_device = `UPDATE weatherdb.device SET active=${request.body.active} WHERE id=${device_id}`;
  var resp = {};
  resp.code = 201;
  resp.message = `The request was successfully received - Set status on device with id=${request.query.id_device}`; 
  connection.query(sql_insert_device,function (err, results, fields) {  
    if(err) {
      resp.code = 400;  
      resp.message = err.sqlMessage;
     }
     response.send(resp);
  });  
});


// SERVER LISTENER
app.listen(port, () => {
  console.log(`API Weather Station listening at ${port}`);
});