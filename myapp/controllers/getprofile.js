const user = require('../models/user')

exports.profile = (req,res)=>{
      const email = req.query.email
      user.findOne({"email":email})
      .then(data => res.send(data))
      .catch(err=>console.log('error'))
}