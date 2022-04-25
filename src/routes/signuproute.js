const express = require('express');
const signupRouter = express.Router();
const Userdata = require("../model/signupdata");

signupRouter.get('/', function (req, res) {

    res.render('signup', {
       
        title:'Signup'
    });

});

signupRouter.get('/adduser', function (req, res) {
    var details = {
        name:req.param("name"),
        userid:req.param("userid"),
        pwdid:req.param("pwdid"),
    };
    var user = Userdata(details);
    user.save();
    res.redirect("/login");
});


module.exports = signupRouter;
