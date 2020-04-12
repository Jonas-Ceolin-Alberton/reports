const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// serve the api
app.use(routes);
// serve all static files 
app.use(express.static('public'));

app.listen(3000);
console.log('Server is running on 3000');