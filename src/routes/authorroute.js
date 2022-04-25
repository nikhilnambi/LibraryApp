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
    return authorRouter;
}

module.exports = router;