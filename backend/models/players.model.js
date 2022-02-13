/**
 * Tyler Hay / hayty@mail.gvsu.edu
 * December 2020
 * Database schema for players
 * 
 * This schema acts as an organizational tool to ensure that
 * each player document in the player collection within the
 * database follows a similar format
 * 
 * player documents represent users. They will have a unique player ID on creation.
 * When using Google Sign In, if a player isn't found using the specified email
 * then a new player document is created and store in the DB with the user's Google
 * Data.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const playersSchema = new Schema({
   //Player ID: Unique to every player
   PID: {type: Number, required: true},
   //Player Name: Autogenerated by Google Sign In data
   PName: {type: String, required: true},
   //Player Email: Autogenerated by Google Sign In data
   Email: {type: String, required: true},
   //Athlete List: All athletes that are linked via PID
   AthList: {type: Array, required: true},
   //Date of last login
   LastPlay: {type: Date, required: true},
   //Instructor ID: Links players under a Super User account that can
   //directly modify player data.
   IiD: {type: Number, required: true}
 }, {
   
   //Timestamps will automatically put DateCreated and DateEdited
   //fields in the schema.
   timestamps: true,
 

 });

 //exporting the schema model so route files can make use of it
 const Players = mongoose.model('players', playersSchema);

 module.exports = Players;