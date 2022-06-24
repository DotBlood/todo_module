const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userScheme = new Schema({

    username: String,

    email: String,
    
    password: String,
    
    ip: String,
    
    jwt_secret: {
        type: String,
        default: "NULL"
    }

});


const User = mongoose.model("User", userScheme);