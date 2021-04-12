const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()
///////////////////////////////////////////////





userRoutes.post('/', userController.createUser) //signup
userRoutes.post('/login', userController.login) //login
userRoutes.get('/:userId/getfood', userController.getFood)







//////////////////////////////////////////////
module.exports = userRoutes;