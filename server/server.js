/* server/server.js */

'use strict';

require("babel-register");

const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  port = process.env.PORT || 5000;

process.env['MONGO_URL'] = '127.0.0.1';
process.env['MONGO_PORT'] = 27017;
process.env['DB_URL'] = process.env['MONGO_URL'];
process.env['DB_PORT'] = process.env['MONGO_PORT'];
process.env['DB_NAME'] = 'typicode';

// mongoose instance connection url connection
const mongoDB = `mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error'));
db.once("open", function(callback) {
    console.log(`Connection to ${mongoDB} successful.`);
});

// api routes registrar
const apiRoutes = require('./api/routes');
apiRoutes(app);
// --------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);

console.log('RESTful API server started on: ' + port);
