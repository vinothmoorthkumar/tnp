const express = require("express")
const Mobile = require("./models/mobile") // new
const router = express.Router()

// Get all posts
router.get("/api/mobile", async (req, res) => {
	const mobile = await Mobile.find()
	res.send(mobile)
})

router.post("/api/mobile", async (req, res) => {
	  
	var new_mobileData = new Mobile(req.body)
	  
	new_mobileData.save().then(result => {
        console.log(result)
		res.send(req.body)

    })
})

module.exports = router