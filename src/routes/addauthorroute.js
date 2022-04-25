const express = require('express');
const addauthorrouter = express.Router();
const Authordata = require("../model/Authordata");




function router(admin){
    addauthorrouter.get('/',function(req,res){
    
       Authordata.find().then(function(){
        res.render('addauthor',{
        admin,
        title: 'Add Author'

     
    });
})
    
});

addauthorrouter.post('/add',function(req,res) {
    console.log("reached");
    const crypto = require("crypto");

    const id = crypto.randomBytes(16).toString("hex");

    console.log(id);

    var item={
        _id:id,
        name:req.body.Name,
        Born:req.body.Born,
        Nationality:req.body.Nationality,
        about: req.body.about,
        image: req.body.image
    }

          var authors=Authordata(item);
          authors.save();
          res.redirect('/admin/authors');
})



     

   return addauthorrouter;
}

    module.exports = router;