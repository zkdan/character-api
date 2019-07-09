const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SingleNameSchema = new Schema({
    "name":String,
    "usualGender": String,
    "origin":String
});

// this is what this file exports
module.exports = mongoose
  // defines the model , retreives the Schema 
  .model('SingleName', SingleNameSchema);