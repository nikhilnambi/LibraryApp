
//accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');

//schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    _id : String,
    title: String,
    author:String,
    genre:String,
    description: String,
    image: String
    
});

//model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
