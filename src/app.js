const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
//const hostname = '127.0.0.1';
// const port = 3000;
const User = require('./api/models/userModel');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://mongo:27017/ipssi2019');
mongoose.connect('localhost:27017');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/userRoutes');
routes(app);

// app.get('/', function (req, res) {
//     res.type('html');
//     res.status(200);
//     res.send('Hello from Docker\n');
// });

// app.listen(port, hostname);
app.listen(8080);
console.log('Running on http://localhost:8080');
