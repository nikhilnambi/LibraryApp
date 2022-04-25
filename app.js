const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');



const nav =[
    {link:'/library/books',name:'Books'},
    {link:'/library/authors',name:'Authors'},
    {link:'/login',name:'Log out'}
];

const admin=[
    {link:'/admin/books',name:'Books'},
    {link:'/admin/authors',name:'Authors'},
    {link:'/admin/addbook',name:'Add Book'},
    {link:'/admin/addauthor',name:'Add Author'},
    {link:'/login',name:'Log out'}
];

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const libraryRouter = require('./src/routes/libraryroute')(nav);
const adminlibraryRouter = require('./src/routes/adminlibraryroute')(admin);
const booksRouter = require('./src/routes/bookroutes')(nav);
const adminbooksRouter = require('./src/routes/adminbooksroute')(admin);
const authorRouter = require('./src/routes/authorroute')(nav);
const adminauthorRouter = require('./src/routes/adminauthorroute')(admin);
const addbookRouter = require('./src/routes/addbookroute')(admin);
const addauthorrouter = require('./src/routes/addauthorroute')(admin);




const app = new express();

app.use(express.urlencoded({
    extended: true
}));

app.use('/login',loginRouter); 
app.use('/signup',signupRouter);
app.use('/library',libraryRouter);
app.use('/adminlibrary',adminlibraryRouter);
app.use('/library/books',booksRouter);
app.use('/admin/books',adminbooksRouter);
app.use('/library/authors',authorRouter);
app.use('/admin/authors',adminauthorRouter);
app.use('/admin/addbook',addbookRouter);
app.use('/admin/addauthor',addauthorrouter);



app.set("view engine","ejs");
app.set('views','./src/view'); 

app.use(express.static("public"));


app.get('/',function(req,res){
    res.render('index',{
        title:' Welcome to Library'
    })
})

const PORT = process.env.PORT || 2200;
    app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
    });