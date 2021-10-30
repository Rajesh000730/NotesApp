const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    email:String,
   username:String,
   password:String
})

const User = mongoose.model('User', userschema)

module.exports = User