const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata");


function router(nav){
    booksRouter.get('/',function(req,res){
        
        Bookdata.find().then(function (books) {
        console.log(books);
        res.render('books',{
        nav,
        title: 'Books',
        books
    
    });
    
});
    });

    booksRouter.get("/single",function(req,res){
         res.send("hey! im single");
    })

    
    booksRouter.get("/:id",(req, res)=> {
  
        console.log(" coming here");
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function (book) {
            console.log(book);
            res.render("book", {
                nav,
                title:'Book',
                book
            })
        });
    });
    return booksRouter;
}


module.exports = router;