var express = require("express");

var PORT = process.env.PORT || 3000;
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"));
app.use(express.static(__dirname + "/app/assets/css"));
app.use(express.static(__dirname + "/app/assets/javacript"));

app.use(express.static(__dirname + "/app/assets/audio"));
require("./routes/html-routes.js")(app);
require("./routes/easy.js")(app);


app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});