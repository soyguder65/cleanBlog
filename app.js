const express=require('express');
const app=express();
const modelim=require('./models/post')
require('dotenv').config()
const mongoose=require('mongoose');
const benssModel = require('./models/post');
const pageRouter=require('./router/pageRouter');
// const postRouter=require('./router/postRouter');

mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db');

app.set('view engine','ejs');
app.use(express.static('public'));


app.use(express.urlencoded({extended:false}))
app.use(express.json())


// ....................................................................index


app.use('/',pageRouter);
// app.use('/new-post',postRouter);
// app.use('/mesajlarim',postRouter);


// ................................................................................about 
// app.get('/about',)   pagerouter a aktardım bununla işim kalmadı


// .................................................................................add_post 
// app.get('/add_post', ) pagerouter a aktardım bununla işim kalmadı



// .................................................................................post 
app.get('/post',(req,res)=>{
res.render('site/post')
} )



// ................................................................................new-post 
// app.post('/new-post',) postRouter a yönlendirdik işim kalmadı bununla

// ...........................................................mesajlarımın id kısmına ulaşıyorum
// app.get('/mesajlarim/:id', )  postRouter a yönlendirdik işim kalmadı bununla

// dotenv ayarı yapıldı......................................................................

app.listen(process.env.PORT || 3000,()=>{

    console.log("proje aktif");
})