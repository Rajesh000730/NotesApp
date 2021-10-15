const jwt = require('jsonwebtoken')

exports.auth = (req,res)=>{
        jwt.verify(req.body.token, 'JWT_SECRET',(err, data)=>{
  
        if(err) return res.send({false:false})
        return res.send({data:data,false:true})
    })
}