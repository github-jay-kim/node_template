/*
 * tutorial_1
 *
 * Copyright (c) 2016 
 * Licensed under the MIT license.
*/

'use strict';

//Import
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// configure
app.use(express['static'](__dirname + '/../www'));

// catch-all
app.get('*', function(req, res) {
  res.sendfile('www/index.html');
});

// bind
app.listen(port);

console.log('Tutorial_1 listening on port ' + port + '.');