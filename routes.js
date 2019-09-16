var express = require('express')
var routes = express.Router()
var controller = require("./controller")

routes.post('/', function(request, response) {
	controller.Login(request, response)
})

module.exports = routes;