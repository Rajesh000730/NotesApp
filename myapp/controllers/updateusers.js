const User = require('../models/user')

exports.update = (req,res)=>{
    User.findOne({name:req.body.name},(err, user)=>{
        if(err) res.send('error')
        user.name = req.body.newname;
        user.save((err)=>{
            if(err) res.send('error')
            else {
                console.log('user updated')
                res.send('ok')
        }

        })
    })
   

}
