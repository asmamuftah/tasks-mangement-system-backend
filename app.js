const express = require('express')

const userRouter = require('./routes/users')
const taskRouter = require('./routes/task')

const app = express()
app.use(express.json())

// ROUTES
app.use(userRouter)
app.use(taskRouter)

module.exports = { app }
