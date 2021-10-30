const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
	email:String,
	dosename:String,
	dosage:String,
	frequency:String,
	time: String,

})

const dose = mongoose.model('doses', userschema);

module.exports = dose