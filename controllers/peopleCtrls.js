// const db = require('../models') //this is where our db mongoose connection lives as well as our models
// 18 we need to define our DB here
const db = require('../models')
console.log(db)




//7 create the people controller. Here we create get people
// Get people is a function that handles GET requests to retrieve a list of people from the database
const getPeople = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    // res.send('getPeople')

    // 19 now instead of just res.send we can now show the people on the page 
    // instead of using await and async we can use .then
    db.People.find({})
    .then((foundPeople) => {
        // the ! means if people cannot be found, all the ! does is FLIPs the value 
        if(!foundPeople){
            res.status(404).json({message:"Cannot find people"})
        // else if they can be found, then success 
        } else {
            res.status(200).json({data: foundPeople})
        }
    })
}



//8 here we have createPeople
// createPeople is a function that handles POST requests to create a new person in the database
const createPeople = (req, res) => {
 
    // res.send('createPeople')

    //20 instead of just res.send we will have a create method that creates a person based on the req.body
    // but the page will not show the req.body yet, this will be done in the frontend portion of our application 
    db.People.create(req.body)
	.then((createdPerson) => {
		if(!createdPerson) {
			res.status(404).json({message: "Cannot create Person"})
		} else {
			res.status(201).json({data: createdPerson})
		}
	})
}

// 21 now lets create updatePerson 
const updatePerson =(req,res) => {

    // res.send("this is create people")
    db.People.findByIdAndUpdate(req.params.id, req.body, {new:true})
	.then((updatedPerson) => {
		if(!updatedPerson) {
			res.status(400).json({message: "Cannot create Person"})
		} else {
			res.status(201).json({data: updatedPerson, message:'updated person'})
		}
	})
}



//23 need a delete person method 
const deletePerson =(req,res) => {
    // res.send("this is create people")
    db.People.findByIdAndDelete(req.params.id)
	.then((deletedPerson) => {
		if(!deletedPerson) {
			res.status(400).json({message: "Cannot delete Person"})
		} else {
			res.status(201).json({data: deletedPerson, message:'deleted person'})
		}
	})

}


// 11, 12, added in the module exports for getpeople and createpeople
module.exports = {
    getPeople, 
    createPeople, 
    updatePerson, 
    deletePerson
}
