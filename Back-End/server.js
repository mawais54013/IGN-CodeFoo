var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ignDB"
});

connection.connect(function (err) {
    if (err) throw err;
});

var app = express();
var PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/add.html"))
})

app.get("/api/news", function(req, res) {
    connection.query("SELECT * FROM news", function(err, response) {
      return res.json(response)
    })
  })

  app.post("/api/news/new", function(req, res) {
    var newData = req.body
    connection.query("INSERT INTO news SET ?", newData)
  })

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
  })
  