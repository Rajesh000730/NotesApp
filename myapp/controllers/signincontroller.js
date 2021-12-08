
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const handlesignin = (user,password)=>{
    var passworderror = false
    const jwtpayload = {id:user._id,email:user.email, username:user.username}
    if(user.password != password){
      passworderror = true;
    }
    const token = jwt.sign(jwtpayload,'JWT_SECRET')
    return {token:token,
            error:'false',
            passworderror:passworderror}
}

exports.signin = (req,res)=>{
     console.log(req.body)
     User.findOne({email:req.body.email})
     .then(data=>handlesignin(data,req.body.password))
     .then(data=>res.json(data))  
     .catch(err=>res.send({error:'true'}))


    
}