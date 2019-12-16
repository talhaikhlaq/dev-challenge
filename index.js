const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const logger = require('./lib/logger')
const { dbURI, port } = require('./config/environment')
const router = require('./config/router')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => console.log('Database connected'))

app.use(bodyParser.json())
app.use(logger)
app.use('/api', router)

app.listen(port, () => console.log(`Back-End express app is up and listening on port ${port}`))

module.exports = app