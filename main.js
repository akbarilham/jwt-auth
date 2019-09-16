'use strict'

const express = require('express')
const morgan = require('morgan')
const port = 3001
const host = '0.0.0.0'
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/login', routes)
app.listen(port, host)
console.log('Running in http://'+host+':'+port+'/')

module.exports = app