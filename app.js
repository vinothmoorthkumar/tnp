const express = require("express")
var bodyParser = require('body-parser')
const app = express()
const mongoose = require("mongoose") // new
var morgan = require('morgan')
const routes = require("./routes") // new
const path= require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))

app.use("/",routes)
mongoose
	// .connect("mongodb://localhost:27017/tnp", { useNewUrlParser: true })
	.connect("mongodb+srv://vinothmoorthykumar:efSSWVYYIDk2FDfa@cluster0.xsgux72.mongodb.net/tnp?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		app.listen(4000, () => {
			console.log("Server has started!")
		})
	})

app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



