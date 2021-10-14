const Dose = require('../models/dose')
const mongoose = require('mongoose')



exports.createdose = (req, res)=>{
	var d = new Date();
    var n = d.toLocaleString();
	const dose = new Dose({
		name: req.body.name,
		dosename: req.body.dosename,
		dosage: req.body.dosage,
		frequency: req.body.frequency,
		time: n
	})

	dose.save((err)=>{
		if(err){
			res.send(err)
		}
		else{
			res.send('doses created')
		}
	})
}