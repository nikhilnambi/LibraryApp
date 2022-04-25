const mongoose = require("mongoose"); // Accessing the mongoose package

//Database connection
//mongoose.connect('mongodb://localhost:27017/Library');

mongoose.connect("mongodb+srv://usernk:usernk@ictak.svswr.mongodb.net/Library?retryWrites=true&w=majority");

//Schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    userid: String,
    pwdid: String
});

// Model creation
var Userdata = mongoose.model("userdata", UserSchema);

module.exports = Userdata;
