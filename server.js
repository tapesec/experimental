var express = require('express');
var app = express();

app.set('views', __dirname + '/app/views');
app.set('views engine', 'ejs');





app.listen(3333, function() {
	console.log("Serveur bien demarré !");
});

