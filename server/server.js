/* server/server.js */

'use strict';

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 5000;

    
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// api routes registrar
let apiRoutes = require('./api/routes');
apiRoutes(app);
// --------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);

console.log('RESTful API server started on: ' + port);
