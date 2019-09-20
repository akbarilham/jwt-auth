require('env2')('.env')
const model = require("./model")
var jwt = require('jsonwebtoken')

var controller = (function(){

	var Login = async function(request, response) {
		try {
			var loginController = await model.Login.findOne({ 
				where: { username: request.body.username} 
			})
			if (loginController.length !== 0) {
				if(loginController.password === request.body.password) {
					var token = jwt.sign(loginController.toJSON(), 'jwtsecret', {
						algorithm: 'HS256',
						expiresIn : '720m'
					});
				}
				response.status(200).send({token: token, message: "Login Success"})
			} else {
				response.status(204).send({message: "Data Empty"})
			}
		} catch (error) {
			response.status(404).send({message: error.message})
		}
	}

	return {
		Login
	}

})()

module.exports = controller