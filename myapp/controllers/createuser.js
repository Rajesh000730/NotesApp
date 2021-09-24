const User = require('../models/user')

exports.createuser = (req,res)=>{
    const user = new User({
        name:req.body.name,
        age:req.body.age
    })
    user.save((err)=>{
        if(err) 
        res.send(err);
        else
        res.send('user created')
    })
}