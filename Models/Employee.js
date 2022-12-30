const mongoose = require("mongoose");
const { Schema } = mongoose;

let enquirySchema = new Schema({
    name: {
        type:String
    },
    followupcalldate:{
        type:String
    },
    followupstatus:{
        type:String
    },
    enquiryby:{
        type:String
    },
    mobile: {
        type:Number
    },
    location: {
        type:String
    }, 
    course: {
        type:String
    },
    feestructure: {
        type:String
    },
    experienceby:{
        type:String
    },
    infosource:{
        type:String
    },
    purpose:{
        type:String
    },
    mode:{
        type:String
    },
    comments:{
        type:String
    },
    
},
   
    {
        collection:"enquiryDetails"
    }
)

module.exports= mongoose.model('Employee',enquirySchema)