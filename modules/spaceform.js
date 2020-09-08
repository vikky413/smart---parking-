const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL,{ useNewUrlParser:true , useCreateIndex:true,});
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