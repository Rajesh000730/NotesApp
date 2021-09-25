
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const handlesignin = (user)=>{
    const jwtpayload = {name:user.name}
    const token = jwt.sign(jwtpayload,'JWT_SECRET')
    return {token:token,
            name:user.name,
            age:user.age,
            error:'false'}
}

exports.signin = (req,res)=>{
     User.findOne({name:req.body.name})
     .then(data=>handlesignin(data))
     .then(data=>res.json(data))  
     .catch(err=>res.send({error:'true'}))


    
}