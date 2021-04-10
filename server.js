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
const userRoutes = require('./routes/userRoutes')


//userRoutes
app.use('/users', userRoutes) //need to use just one app.use per route!








//////////////////////////////write code above///////////////////////////////
const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log('backend server running!')
  routesReport.print()
})