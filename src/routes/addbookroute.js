const express = require('express');
const addbookRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const multer = require("multer");




function router(admin){
    addbookRouter.get('/',function(req,res){
    
        Bookdata.find().then(function(){
        res.render('addbook',{
        admin,
        title: 'Add Book'

     
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


addbookRouter.post('/add',upload.single("image"),function(req,res) {
    console.log("reached");
   

    var item={
       
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        description: req.body.description,
        image: req.body.image
    }

          var books=Bookdata(item);
          books.save();
          res.redirect('/admin/books');
})

     

   return addbookRouter;
}

    module.exports = router;