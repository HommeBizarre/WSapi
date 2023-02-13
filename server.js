const express = require("express");
const app = express();

app.use(express.static(__dirname + "/frontEnd"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});