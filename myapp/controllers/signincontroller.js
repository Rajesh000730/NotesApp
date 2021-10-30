
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const handlesignin = (user)=>{
    const jwtpayload = {email:user.email, password:user.password}
    const token = jwt.sign(jwtpayload,'JWT_SECRET')
    return {token:token,
            user_id:user._id,
            email:user.email,
            username:user.username,
            error:'false'}
}

exports.signin = (req,res)=>{
     console.log(req.body)
     User.findOne({email:req.body.email})
     .then(data=>handlesignin(data))
     .then(data=>res.json(data))  
     .catch(err=>res.send({error:'true'}))


    
}