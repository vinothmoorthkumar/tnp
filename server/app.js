const express = require("express")
var bodyParser = require('body-parser')
const app = express()
const mongoose = require("mongoose") // new
var morgan = require('morgan')
const routes = require("./routes") // new


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use("/",routes)
mongoose
	.connect("mongodb://localhost:27017/tnp", { useNewUrlParser: true })
	.then(() => {
		app.listen(4000, () => {
			console.log("Server has started!")
		})
	})

app.get("/", function(req, res) {
  res.send("It's working!")
})
