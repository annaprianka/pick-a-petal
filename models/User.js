const mongoose = require ("mongoose")
const { stringify } = require("postcss")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic: {
        type:String,
        default: "",
        },
    },
    {timestamp: true}
);

module.exports = mongoose.model ("User", UserSchema);

