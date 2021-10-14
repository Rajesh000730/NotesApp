const doses = require('../models/dose')

exports.getdoses = (req,res)=>{
      const name = req.query.name
      doses.find({name:name}).sort({"time":-1})
      .then((data) => res.send(data))
      .catch(err=>console.log('error'))
}