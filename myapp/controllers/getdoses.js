const doses = require('../models/dose')

exports.getdoses = (req,res)=>{
      const name = req.params.name
      console.log(name);
      doses.findOne({name:"raju"})
      .then(data => res.send(data))
      .catch(err=>console.log('error'))
}