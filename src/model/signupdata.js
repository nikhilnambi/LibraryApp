const mongoose = require("mongoose"); // Accessing the mongoose package

 mongoose.connect("mongodb://localhost:27017/Library"); // connecting and creating database

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