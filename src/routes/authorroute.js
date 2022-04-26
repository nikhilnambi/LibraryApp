const express = require("express");
const authorRouter = express.Router();
const Authordata = require("../model/Authordata");


function router(nav){
    authorRouter.get('/',function(req,res){
    
        Authordata.find().then(function (authors) {
        res.render('authors',{
        nav,
        title: 'Authors',
        authors
    
    });
    
});
    });
    authorRouter.get("/:id",(req, res)=> {
  
        console.log(" coming here");
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function (author) {
            console.log(author);
            res.render("author", {
                nav,
                title:'Author',
                author
            })
        });
    });
   
    return authorRouter;
}

module.exports = router;