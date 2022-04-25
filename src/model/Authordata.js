
//accessing mongoose package
const mongoose = require('mongoose');

//Database connection

//mongoose.connect('mongodb://localhost:27017/Library');


mongoose.connect("mongodb+srv://usernk:usernk@ictak.svswr.mongodb.net/Library?retryWrites=true&w=majority");


//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    _id:String,
    name:String,
    image:String,
    Born:String,
    Nationality:String,
    about:String
});

//model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
