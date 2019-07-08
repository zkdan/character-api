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

const router = express.Router();
// which port has our information - this can be any number.
// when we make our API live, it will be determined by where our API is hosted.
const port = process.env.PORT || 3000;

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/characters';

// parse requests, we want them to be JSON
// app.use(bodyParser.json())

// mongoose.connect(dbURL);

// basic get request
// app.get('/', (req, res) => {
//     res.json({ "message": "Yes! It's working!" });
//     return;
// });

router.route('/')
  .get((req, res) => {
    res.json({ "message": "Yes! It's working!" });
  });

router.route('/names')
  .get((req, res) => {
    res.json(res);
  });
router.route('/names/:first-letter')
  .get((req, res) => {
    Name.find({},)
    const firstLetter = req.params.firstLetter;

    res.json({ "message": `This is /names/${firstLetter}!` });
  });

router.route('/characteristics')
  .get((req, res) => {
    res.json({ "message": "characteristics" });
  });

app.use('/api', router);

// listen on port 3000
app.listen(port, () => {
  console.log(`I'm here, I care, I'm listening on ${port}.`);
});