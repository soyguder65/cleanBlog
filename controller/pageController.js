const benssModel = require("../models/post");

const home = async (req, res) => {
  const mesajlarim = await (await benssModel.find({})).reverse();
  res.render("site/index", { mesajlarim });
};


const about= (req,res)=>{

    res.render('site/about')
    
    } 

const add_post=(req,res)=>{

    res.render('site/add_post')
    
    }

module.exports = {
  home,
  about,
  add_post
};
