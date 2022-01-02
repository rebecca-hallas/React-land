const express = require('express')
const path = require('path')

const beautyRoutes = require('./routes/beauty')
const fashionRoutes = require('./routes/fashion')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beauty', beautyRoutes)
server.use('/api/v1/fashion', fashionRoutes)

module.exports = server
