const dose = require('../models/dose')

module.exports = (req, res)=>{
     dose.findById({"_id":req.body.id}, (err, data)=>{
        if(err) res.send('err')
        data.dosename = req.body.dosename
        data.dosage = req.body.dosage
        data.frequency = req.body.frequency 
        data.save((err)=>{if(err) res.send(err); res.send(data) } )
          
     })
    
    
}