const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const morgan = require('morgan')//morgan is like console.log(on terminal)
app.use(morgan('tiny'))

//////////////////////////////write code below///////////////////////////////
const userRoutes = require('./routes/userRoutes')
const foodRoutes = require('./routes/foodRoutes')


//userRoutes
app.use('/users', userRoutes) //need to use just one app.use per route!
//foodRoutes
app.use('/food', foodRoutes)







//////////////////////////////write code above///////////////////////////////
const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log('backend server running!')
  routesReport.print()
})
