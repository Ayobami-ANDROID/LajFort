const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    role:{
        type:String,
        enum:['student', 'Teacher']

    }
})

module.exports= mongoose.model('user',userSchema)