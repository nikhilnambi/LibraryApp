const express = require("express");
const adminauthorRouter = express.Router();
const Authordata = require("../model/Authordata");


function router(admin){
    adminauthorRouter.get('/',function(req,res){
    
        Authordata.find().then(function (authors) {
        res.render('adminauthors',{
        admin,
        title: 'Authors',
        authors
    
    });
    
});
    });

    adminauthorRouter.get('/:id',function(req,res){

        const id = req.params.id;
        Authordata.findOne({id:id}).
        then(function(author){
            console.log(author);
            res.render('adminauthor',{
                admin,
                title:'Author',
                author
            });

        });
    });

    adminauthorRouter.get('/:id/delete',function(req,res){
        const id = req.params.id;

        Authordata.findOneAndDelete({
            _id:id
        }).then(function(){
            res.redirect('/admin/authors')
        });
    });

    adminauthorRouter.get('/:id/edit',function(req,res){
        const id = req.params.id;

        Authordata.findById({_id:id})
        .then(function(editauthor){
            res.render("editauthor",{
                admin,
                title:"Edit Author",
                editauthor
               


            });
            console.log(editauthor);
        });
    });
  
   adminauthorRouter.post("/:id/edit/update",function(req,res){
        console.log("hi");
        console.log(req.body);
        const id= req.params.id;
        console.log(req.params.id);
        Authordata.findByIdAndUpdate(
            id,{
                $set:{
                   name:req.body.name,
                   Born:req.body.Born,
                    Nationality:req.body.Nationality,
                    about:req.body.about,
                    image:req.body.image

                }

        }).
        then(function(){
            res.redirect('/admin/authors')
        })
     })



    return adminauthorRouter;
}

module.exports = router;