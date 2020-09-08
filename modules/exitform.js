const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL,{ useNewUrlParser:true , useCreateIndex:true,});
var conn = mongoose.Collection;
var exitSchema = new mongoose.Schema({
    vnumber:{
        type:String,
        required:true,
    },
    vehicletype:{
        type:String,
        required:true,
    },
    exittime:{
        type:String,
        required:true,
    },
    exitdate:{
        type:Date,
        required:true,
    },
    date:{
        type: Date, 
        default: Date.now }
});
var exitModel  = mongoose.model('Exites',exitSchema);
module.exports = exitModel;