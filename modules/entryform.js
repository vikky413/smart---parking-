const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL,{ useNewUrlParser:true , useCreateIndex:true,});
var conn = mongoose.Collection;
var entrySchema = new mongoose.Schema({
    vnumber:{
        type:String,
        required:true,
    },
    vehicletype:{
        type:String,
        required:true,
    },
    entrytime:{
        type:String,
        required:true,
    },
    entrydate:{
        type:Date,
        required:true,
    },
    date:{
        type: Date, 
        default: Date.now }
});
var entryModel  = mongoose.model('Entries',entrySchema);
module.exports = entryModel;