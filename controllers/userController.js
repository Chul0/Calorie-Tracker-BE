const models = require('../models')

const userController = {}

//signup
userController.createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        height: req.body.height,
        weight: req.body.weight
      })
      
      res.json({message: 'New user created', user})
    } catch (error) {
      //Validation error messages
        if (error.errors[0].path === 'firstName') {
        res.json({error: 'First name is required'})  
        }else if(error.errors[0].path === 'lastName') {
        res.json({error: 'Last name is required'})  
        }else if(error.errors[0].path === 'password') {
          res.json({error: 'Password is required'})  
        }else if(error.errors[0].path === 'height') {
          res.json({error: 'Height is required'})  
        }else if(error.errors[0].path === 'weight') {
          res.json({error: 'weight is required'})  
        }else{
        res.status(400)
        res.json({error: 'Email is already used by someone'})
      }
    }
  }

  //signin

userController.login = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where:{
          email: req.body.email
        }
      })
      // console.log(user)
      if(user.password === req.body.password){
        res.json({message: 'login successful', user: user})
      }else{
        res.status(401)
        res.json({error:'incorrect password'})
      }
  
    } catch (error) {
      res.status(400)
      res.json({error: 'login failed'})
    }
  }
  
// Find saved food from user
userController.getFood = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where:{
        id: req.params.userId
      }
    })
    let food = await user.getFood()
    // console.log('savedFood', food)
    res.json(food)
  } catch (error) {
    res.json({error})
  }
}

//Delete account
userController.delete = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where: {
        id: req.params.id
      }
    })
    await user.destroy()
    res.json({user, message: 'Account deleted'})
  } catch (error) {
    res.json({error})
  }
}


  module.exports = userController;