// const db = require('../models') //this is where our db mongoose connection lives as well as our models

//7 create the people controller. Here we create get people
// Get people is a function that handles GET requests to retrieve a list of people from the database
const getPeople = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    res.send('getPeople')
}

//8 here we have createPeople
// createPeople is a function that handles POST requests to create a new person in the database
const createPeople = (req, res) => {
 
    res.send('createPeople')
}

module.exports = {
    getPeople, 
    createPeople
}
