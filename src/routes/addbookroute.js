const express = require('express');
const addbookRouter = express.Router();
const Bookdata = require("../model/BookData");




function router(admin){
    addbookRouter.get('/',function(req,res){
    
        Bookdata.find().then(function(){
        res.render('addbook',{
        admin,
        title: 'Add Book'

     
    });
})
    
});

addbookRouter.post('/add',function(req,res) {
    console.log("reached");
    const crypto = require("crypto");

    const id = crypto.randomBytes(16).toString("hex");

    console.log(id);

    var item={
        _id:id,
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