var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var battleSchema = new Schema({
    "name": String,
    "year": Number,
    "battle_number": Number,
    "attacker_king": String,
    "defender_king": String,
    "attacker_1": String,
    "attacker_2": String,
    "attacker_3": String,
    "attacker_4": String,
    "defender_1": String,
    "defender_2": String,
    "defender_3": String,
    "defender_4": String,
    "attacker_outcome": String,
    "battle_type": String,
    "major_death": Number,
    "major_capture": Number,
    "attacker_size": Number,
    "defender_size": Number,
    "attacker_commander": String,
    "defender_commander": String,
    "summer": Number,
    "location": String,
    "region": String,
    "note": String
  });
  
  // the schema is useless so far
  // we need to create a model using it
  let battles = mongoose.model('battles', battleSchema);
  
  // make this available to our users in our Node applications
  module.exports = battles;