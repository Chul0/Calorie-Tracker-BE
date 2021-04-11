const foodController = require('../controllers/foodController')

const express = require('express');
const foodRoutes = express.Router()



foodRoutes.get('/search/:foodname', foodController.search)







module.exports = foodRoutes;