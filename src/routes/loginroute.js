const express = require('express');
const loginRouter = express.Router();
const admin = require('../data/admin');
const Userdata = require('../model/signupdata');


loginRouter.get('/',function(req,res){

    res.render('login',{
        title:'Login'
    });
    
})


loginRouter.get("/check",function(req,res){

    //getting the data entered by the user in login page
    var checkuser = {
        userid:req.param("userid"),
        pwdid:req.param("pwdid")
    };
    
    console.log(checkuser);
    
      //cross checking the data
      var userauth;
      var adminauth;

      Userdata.find().then(function(user){

             console.log(user);
           
         
       for(let i=0;i<user.length;i++){
          
        if(checkuser.userid==user[i].userid && checkuser.pwdid==user[i].pwdid)
        {
            
            userauth =true;
            break;
        }
        else{
               userauth =false;
            }

           
        };
        
        
   
        
    
        for(let i=0;i<admin.length;i++){
        
           

            if(checkuser.userid==admin[i].userid && checkuser.pwdid==admin[i].pwdid)
            {
                
                adminauth =true;
                break;
            }
            else{
                  adminauth =false;
                }
                
            };

            console.log("User authentication: "+userauth);
            console.log("admin authentication : "+adminauth);
      
                 

if(userauth==true){
   
    res.redirect("/library")
}
else if(adminauth==true){
   
    res.redirect("/adminlibrary");
}
else{
    res.redirect("/login");
}

});

});

module.exports = loginRouter;