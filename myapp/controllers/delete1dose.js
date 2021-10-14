const dose = require('../models/dose')

exports.deletedoses = (req,res)=>{
  
    dose.deleteOne({id:req.body.id} ).then(()=>{res.send('deleted successfully')})
}