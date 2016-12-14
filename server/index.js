// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
// mongoose.connect('mongodb://localhost:auth/auth');
var username = 'root';
var pass = 'root';
mongoose.connect('mongodb://'+username+':'+pass+'@ds023458.mlab.com:23458/usersmanager');
mongoose.connection.on("open", function() {
    console.log("connection to database done!");
});
// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
