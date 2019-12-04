const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// const hostmane = '127.0.0.1';
// const port = 8080;
const User = require('./api/models/userModel');

//connexion à mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/userRoutes');
routes(app);

// app.get('/', function (req, res) {
//     res.type('html');
//     res.status(200);
//     res.send('Hello from Docker\n');
// });

// app.get('/articles/:id', function(req, res){
//     res.type('html');
//     res.status(200);
//     res.send("articles" + req.params.id);

// })


// app.listen(port, hostmane);
app.listen(8080);

console.log('Running on http://localhost:8080');
			