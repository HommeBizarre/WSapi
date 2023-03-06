const express = require("express");
const  app = express();
const path = require("path")

const port = 8080


console.log("Serveu.js : Le répertoire actuel est : " + __dirname)

app.use(express.json())
app.use(express.static("public"));
app.use(express.static("src"));
app.use(express.static("classes"));

app.get("/", (request, response) => {
  console.log("Ouverture index.htlm")
  response.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post('/user', (request, response) => {
  console.log(request.body)
  request.end()
})

app.listen(port, () => {
  console.log("Server is working on port : " + port);
});
