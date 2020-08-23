const express = require('express');
const cors = require('cors');
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes
app.use(require('./routes/index'));


app.listen(3000);

console.log('server on port 3000');

