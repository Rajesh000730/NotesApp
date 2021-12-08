const User = require('../models/user')

exports.createuser = (req,res)=>{
    if(User.findOne({email:req.body.email})){
        res.send("exists");
        return;
    }
    const user = new User({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    user.save((err)=>{
        if(err) 
        res.send(err);
        else
        res.send(req.body)
    })
}