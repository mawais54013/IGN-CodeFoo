var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");
// required node modules
// please replace any of the below info with your setting to make the back end portion work. 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ignDB"
});
// set up connection
connection.connect(function (err) {
    if (err) throw err;
});

var app = express();
var PORT = 3002;
// set up the routes with each data from database 
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));
// default 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
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
// app listen on the following port
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
  })
  