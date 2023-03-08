const express = require("express");
const  app = express();
const path = require("path")
const date = require('date-and-time');
exports.app = app;

const port = 5500

console.log("Serveur.js : Le répertoire actuel est : " + __dirname)

app.use(express.json())
app.use(express.static("public"));
app.use(express.static("src"));

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
