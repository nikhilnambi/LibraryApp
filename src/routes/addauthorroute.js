const express = require('express');
const addauthorrouter = express.Router();
const Authordata = require("../model/Authordata");
const multer = require("multer");




function router(admin){
    addauthorrouter.get('/',function(req,res){
    
       Authordata.find().then(function(){
        res.render('addauthor',{
        admin,
        title: 'Add Author'

     
    });
})
    
});

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: imageStorage
});

addauthorrouter.post('/add',upload.single("image"),function(req,res) {
    console.log("reached author");
    
   

    var item={
        
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