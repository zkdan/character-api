// what tools are we using?
// this require() syntax is CommonJS

// express for common application functions
const express = require('express');

// body-parser for parsing the response we get from our API
const bodyParser = require('body-parser');

// mongoose to deal with our data
const mongoose = require('mongoose');

// we create an app using express's express() function
const app = express();

// which port has our information - this can be any number.
// when we make our API live, it will be determined by where our API is hosted.
const port = process.env.MONGODB_URI || 3000;

// parse requests, we want them to be JSON
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ "message": "Yes! It's working!" });
});

// listen on port 3000
app.listen(port, () => {
  console.log(`I'm here, I care, I'm listening on ${port}.`);
});