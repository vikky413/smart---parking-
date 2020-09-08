const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vikky4nu:Vikram123@cluster0.mdhxb.gcp.mongodb.net/vehicle?retryWrites=true&w=majority",{ useNewUrlParser:true , useCreateIndex:true,});
var conn = mongoose.Collection;
var spaceSchema = new mongoose.Schema({
    spacetitle:{
        type:String,
        required:true,
    },
    totalparkingspace:{
        type:String,
        required:true,
    },
    date:{
        type: Date, 
        default: Date.now }
});
var userModel  = mongoose.model('spaces',spaceSchema);
module.exports = userModel;