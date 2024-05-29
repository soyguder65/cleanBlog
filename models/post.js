const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const moment=require('moment');

const BlogPost=new Schema({
    title:String,
    detail:String,
    dateCreated:{
        type:String, 
        default:moment().format('DD-MM-YYYY,h:mm:ss a')}
    
});


const benssModel=mongoose.model('benssModel',BlogPost);

module.exports=benssModel;