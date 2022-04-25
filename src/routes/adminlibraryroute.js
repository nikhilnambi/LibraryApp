const express = require('express');
const adminlibraryRouter = express.Router();




function router(admin){
    adminlibraryRouter.get('/',function(req,res){
    
        res.render('adminlibrary',{admin,
        title: 'My library'});
        
    });
    return adminlibraryRouter;
}


module.exports = router;