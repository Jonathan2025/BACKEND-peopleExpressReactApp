// step 10 - where we will set up route and what our indexes will be for each route 
const router = require('express').Router()
const peopleRoute = require('./peopleRoutes') // import people routes methods 

// URL directory 
router.use('/people', peopleRoute)


module.exports = router 