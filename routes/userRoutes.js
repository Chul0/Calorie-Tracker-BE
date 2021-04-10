const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()
///////////////////////////////////////////////





userRoutes.post('/', userController.createUser)
userRoutes.post('/login', userController.login)







//////////////////////////////////////////////
module.exports = userRoutes;