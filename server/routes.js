const express = require("express")
const Mobile = require("./models/mobile") // new
const router = express.Router()

// Get all posts
router.get("/api/mobile", async (req, res) => {
	const mobile = await Mobile.find()
	res.send(mobile)
})

router.post("/api/mobile", async (req, res) => {
    console.log("@@@@@",req.body)
    res.send(req.body)
	// const mobile = await Mobile.find()
	// res.send(mobile)
})

module.exports = router