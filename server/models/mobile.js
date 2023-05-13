const mongoose = require("mongoose")

const schema = mongoose.Schema({
	district: String,
	policeStation: String,
	fullname:String,
	age:Number,
	address:String,
	caseNo:Number,
	year:Number,
	mobileMake:String,
	mobileModel:String,
	mobileColor:String,
	slot1Imei:String,
	slot2Imei:String,
	slot1Number:String,
	slot2Number:String,
	lostPlace:String,
	lostMobileDateAndTime: Date,
	caseStatus: { type: String, default: 'pending' },
	status:{ type: Number, default: 1 }
}, { timestamps: true })

module.exports = mongoose.model("Mobile", schema)