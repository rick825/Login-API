const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required: true,
    },
    lname:{
        type: String,
        required: true
    },
    mobilenumber:{
        type : Number ,
        required: true
    },
    email:{
        type: String,
        unique : true,
        required: true
    }
})




const User = mongoose.model("User",userSchema);


module.exports = {User};