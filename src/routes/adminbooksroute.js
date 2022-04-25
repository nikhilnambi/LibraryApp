const express = require("express");
const adminbooksRouter = express.Router();
const Bookdata = require("../model/BookData");


function router(admin){
    adminbooksRouter.get('/',function(req,res){
    
        Bookdata.find().then(function (books) {
        res.render('adminbooks',{
        admin,
        title: 'Books',
        books
    
    });
    
});
    });
    
    adminbooksRouter.get('/:id',function(req,res){
        
        

        const id = req.params.id;
        Bookdata.findById({_id:id}).
        then(function (book) {
        console.log(book);
        res.render('adminbook',{
        admin,
        title: 'Book',
        book
    
    });
    
});
    });

   adminbooksRouter.get('/:id/delete',function(req,res){
       console.log("got here");
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id:id}).
        then(function(){
             res.redirect('/admin/books')
            });
        });


    adminbooksRouter.get('/:id/edit',function(req,res){
        console.log(" got edit");
        const id = req.params.id;

        Bookdata.findById({_id:id})
        .then(function(editdata){
            res.render("edit",{
                admin,
                title:"Edit Book",
                editdata
            })
            console.log(editdata);
        });
     
    });
    console.log("Hi start");
    adminbooksRouter.post("/:id/edit/update",function(req,res){
        console.log("hi");
        console.log(req.body);
        const id= req.params.id;
        console.log(req.params.id);
        Bookdata.findByIdAndUpdate(
            id,{
                $set:{
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre,
                    description:req.body.description,
                    image:req.body.image

                }

        }).
        then(function(){
            res.redirect('/admin/books')
        })
     })

    
    return adminbooksRouter;
}

module.exports = router;