// 5 need to import express router and import all the methods from the controllers
const router = require('express').Router()
const {peopleCtrl} = require('../controllers')


// 6) Routes - methods
// get people will be a method in our peoples controller, so we are linking to that route and the specific getPeople route
router.get('/', peopleCtrl.getPeople)

//adding in the create people route
router.post('/', peopleCtrl.createPeople)

// 22 adding in the update person route 
router.put('./:id', peopleCtrl.updatePerson)


//24 Adding in the delete person route 
router.delete('./:id', peopleCtrl.deletePerson)

module.exports = router