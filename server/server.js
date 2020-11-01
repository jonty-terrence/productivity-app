const path = require('path')
const express = require('express')

const server = express()

const weatherRoutes = require('./routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v2/weather', weatherRoutes)

module.exports = server
