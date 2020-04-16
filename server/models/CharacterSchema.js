//importing mongoose files from the mongoose module
let mongoose = require('mongoose');
//using the Schema class from mongoose file
let Schema = mongoose.Schema
//Creating the characters schema for mongoDB
let CharacterSchema = new Schema({
    name:String,
    gender:String,
    age:Number

},{timestamps:true})
//Exporting file to be used in the api.js
module.exports = mongoose.model('characters200416',CharacterSchema)