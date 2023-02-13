const express = require("express");
const app = express();

app.use(express.static(__dirname + "/frontEnd"));
//app.use(express.static(__dirname + "/classes"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});