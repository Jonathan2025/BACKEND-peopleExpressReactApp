// 5 need to import express router and import all the methods from the controllers
const router = require('express').Router()
const {peopleCtrl} = require('../controllers')


// 6) Routes - methods
// get people will be a method in our peoples controller, so we are linking to that route and the specific getPeople route
router.get('/', peopleCtrl.getPeople)






module.exports = router