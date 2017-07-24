// importar modulo do express
var express = require('express');
//importar o modulo do consig
var consign = require('consign');
//importar body-parser
var bodyParser = require('body-parser');
//importando express-validator
var expressValidator = require('express-validator');
//iniciando express
var app = express();


//configurar ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');
//middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extend : true}));
app.use(expressValidator());

//consign
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);
//exportando o objeto app
module.exports = app;