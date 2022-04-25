const express = require('express');
const libraryRouter = express.Router();




function router(nav){
    libraryRouter.get('/',function(req,res){
    
        res.render('library',{nav,
        title: 'Home'});
        
    });
    return libraryRouter
}


module.exports = router;