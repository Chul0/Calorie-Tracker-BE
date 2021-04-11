const axios = require('axios')
const models = require('../models')

const foodController = {}

foodController.search = async (req, res) => {
    try {
        let search = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${req.params.foodname}&app_id=${"09c1bf75"}&app_key=${"580960872d600d9775b460e3916de0d6"}`)
        res.json(search.data)
        // console.log(search.data)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

foodController.save = async (req ,res) => {
    try {
        const newFood = await models.food.findOrCreate({
            where:{
                name: `${req.body.name}`,
                foodId: `${req.body.foodId}`,
            }
        })
        const user = await models.user.findOne({
            where: {
                id:req.params.userId
            }
        })
        let addAssociation = await user.addFood(newFood[0])
        // console.log(newFood)
        res.json({newFood, user, addAssociation})
    } catch (error) {
        res.json(error)
    }
}

module.exports = foodController;