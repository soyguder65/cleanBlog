const benssModel = require("../models/post");

const newPost=async(req,res)=>{
    console.log(req.body);
    await benssModel.create(req.body);
    res.redirect('/');
    }


    const getPage=async (req,res)=>{
        const id=req.params.id;
        const mesajlarim=await benssModel.find({_id:id});
    
        res.render('site/post.ejs',{mesajlarim})
    }

    module.exports={
        newPost,
        getPage,
        
    }