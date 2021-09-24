const user = require('../models/user')

exports.profile = (req,res)=>{
      const name = req.params.nam
      user.findOne({name:name})
      .then(data => res.send(data))
      .catch(err=>console.log('error'))
}