const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()
///////////////////////////////////////////////





userRoutes.post('/', userController.createUser) //signup
userRoutes.post('/login', userController.login) //login


userRoutes.get('/:userId/getfood', userController.getFood) //pull saved food from user

userRoutes.delete('/:id', userController.delete) //Delete user account
userRoutes.delete('/:userId/delete', userController.deleteFood)



//////////////////////////////////////////////
module.exports = userRoutes;