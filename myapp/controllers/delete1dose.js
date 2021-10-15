const dose = require('../models/dose')

exports.deletedoses = (req,res)=>{
  
    dose.deleteOne({"_id":req.body.id}, (err, obj)=>{
        if(err) res.send(err)
        else{res.send('deleted')}
    } )
   
}