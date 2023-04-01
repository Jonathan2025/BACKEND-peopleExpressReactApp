// 16 now we need to create our peoples model 
const mongoose = require("mongoose")

// where our people schema will go 
const PeopleSchema = new mongoose.Schema({
    // we will keep the attributes simple here 
    name: String,
    image: String, 
    title: String,
})

// now we need to create a model from our schema 
const People = mongoose.model("People", PeopleSchema)


module.exports = People
