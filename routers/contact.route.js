const route=require('express').Router()
const contactController=require('../controllers/contact.controller')

route.get('/contact',contactController.getPageContact)


module.exports=route