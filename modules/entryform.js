const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vikky4nu:Vikram123@cluster0.mdhxb.gcp.mongodb.net/vehicle?retryWrites=true&w=majority",{ useNewUrlParser:true , useCreateIndex:true,});
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