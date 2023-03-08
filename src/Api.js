const express = require("express");
const  app = express();
const db = require('../config/db.js')
const script = require('../public/script')

const path = require("path")
const date = require('date-and-time');
const port = 5500

app.use(express.json())
app.use(express.static("public"));
app.use(express.static("src"));

/*
// GET - LAST MEASURE
app.get("/api/last_measure", (request, response) => {
  db.query("SELECT * FROM weatherdb.measure WHERE device_id=1 ORDER BY \`measure_created_at\` DESC LIMIT 1",
    (err,result)=>{
      if(err) {
        resp.code = 400;  
        resp.message = err.sqlMessage;
       }
      resp.code = 200;
      resp.message = "The request was successfully received - Get the last measure"; 
      response.send(result);
    });
});*/

console.log("Serveur.js : Le répertoire actuel est : " + __dirname)

//Recherche et ouverture du fichier index.html
app.get("/", (request, response) => {
  console.log("Ouverture index.htlm")
  response.sendFile(path.join(__dirname + "/public/index.html"));
});

//affiche la page Web
app.post('/user', (request, response) => {
  console.log(request.body)
  request.end()
})

//redirige le serveur sur le port choisis
app.listen(port, () => {
  console.log("Server is working on port : " + port);
});