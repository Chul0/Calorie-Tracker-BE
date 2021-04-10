const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const morgan = require('morgan')//morgan is like console.log(on terminal)
app.use(morgan('tiny'))

const models = require('./models')
//////////////////////////////write code below///////////////////////////////

//signup
const createUser = async (req, res) => {
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

app.post('/users', createUser)











//////////////////////////////write code above///////////////////////////////
const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log('backend server running!')
  routesReport.print()
})