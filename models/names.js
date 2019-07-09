const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NamesSchema = new Schema({
  names: Array
});

// this is what this file exports
module.exports = mongoose
  // defines the model , retreives the Schema 
  .model('Names', NamesSchema);