// server.js
// imports needed packages
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
// creates the express app
app = express();
//old
// app.use(serveStatic(__dirname + "/dist"));
//new
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
// below was var
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);