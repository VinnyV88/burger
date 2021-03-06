var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

var PORT = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get('/', function(req, res){
// 	res.send('hi')
// });
// Import routes and give the server access to them.
var burgersController = require("./controllers/burgers_controller.js");

app.use("/burgers", burgersController);

app.listen(PORT, function(){
	console.log('listening on PORT ' + PORT)
});
