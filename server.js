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
const SingleName = require('./models/single-name.js');
const TestSchema = mongoose.Schema({
  "first": Array,
  "second": Array
});
const Test = mongoose.model('Test', TestSchema);
// parse requests, we want them to be JSON
app.use(bodyParser.json())

mongoose.connect(dbURL, { useNewUrlParser: true });

// basic get request
// app.get('/', (req, res) => {
//     res.json({ "message": "Yes! It's working!" });
//     return;
// });


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

router.route('/')
  .get((req, res) => {
    res.json({ "message": "Yes! It's working!" });
  });

router.route('/test')
  .get((req, res) => {
    // res.json({ "message": "names" });

    Test.find({}, (err, docs) => {
      console.log('finding the thing')
      if (err) {
        res
          //add a status code
          .status(400) // here, the fetcher will ask for a format, and you'll just give that
          .send({
            message: 'no way no'
          })
          // has the headers / content type
          // tells the API to send back json
          .json({
            message: 'wuuuutttttttttttt.'
          });
        return;
      }
      res
        .status(200)
        .json(docs)
        console.log(docs)
    });

  });


// router.route('/names/name')
//   .get((req, res) => {
//     const firstLetter = req.params.firstLetter;
//     SingleName.find({ "name":firstLetter}, (err, docs) =>{
//       if (err) {
//         res
//           //add a status code
//           .status(400) // here, the fetcher will ask for a format, and you'll just give that
//           .send({
//             message: 'no way no'
//           })
//           // has the headers / content type
//           // tells the API to send back json
//           .json({
//             message: 'wuuuutttttttttttt.'
//           });
//         return;
//       }
//       res
//         .status(200)
//         .send(docs);
//     });

//     res.json({ "message": `This is /names/${firstLetter}!` });
//   });

router.route('/characteristics')
  .get((req, res) => {
    res.json({ "message": "characteristics" });
  });

app.use('/api', router);

// listen on port 3000
app.listen(port, () => {
  console.log(`I'm here, I care, I'm listening on ${port}.`);
});