const sequelize = require("./database").sequelize
const Sequelize = require('sequelize')
var tableName = 'users'

var model = (function(){

	var Login = sequelize.define(tableName, {
	    username: {
	    	type: Sequelize.STRING,
	    	unique: true,
	    	allowNull: false
	    },
	    password: {
	    	type: Sequelize.STRING,
	    	unique: true,
	    	allowNull: true
	    }
	})

	return {
		Login
	}

})()

module.exports = model