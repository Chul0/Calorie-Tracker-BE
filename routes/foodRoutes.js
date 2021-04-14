const foodController = require('../controllers/foodController')

const express = require('express');
const foodRoutes = express.Router()



foodRoutes.get('/search/:foodname', foodController.search) //food search
foodRoutes.post('/:userId/save', foodController.save) //save food to users


foodRoutes.get('/search/foodId', foodController.searchOne) 






module.exports = foodRoutes;