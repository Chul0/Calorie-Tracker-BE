const foodController = require('../controllers/foodController')

const express = require('express');
const foodRoutes = express.Router()



foodRoutes.get('/search/:foodname', foodController.search)
foodRoutes.post('/:userId/save', foodController.save)







module.exports = foodRoutes;