// 1) set up the dependencies. Add in the PORT, express, routes, and listener
require("dotenv").config()


// Pull PORT from .env 
const {PORT} = process.env 

// Get PORT from .env 
const express = require("express")

// create an application object 
const app = express()

// import cors 
const cors = require('cors')


// Middleware 
app.use(cors()) // this will prevent the cors errors and allow us to open access to all origins. An origin can be anything like localhost, heroku, etc
app.use(express.urlencoded({extended:true})) // allow us to get req.body
app.use(express.json()) // parse json

// ROUTES
// 2) Create a test route 
app.get("/", (req,res) => {
    res.send("Hello World")
})


// 3) Now import the availiable routes in the /routes/index.js. In unit 2 we would import the controllers
const routes = require('./routes/index.js')
app.use('/', routes)

// 4) catch route if it doesnt match to anything we will sent this response 
app.use((req, res) => {res.status(404).json({message: "Not a proper route- 404 Error"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}` ))