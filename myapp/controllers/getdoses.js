const doses = require('../models/dose')

exports.getdoses = (req,res)=>{
      const email = req.query.email
      doses.find({"email": email}, (err, obj)=>{
            if(err) res.send(err)
            res.send(obj)
      }).sort({time:-1})
      
}     