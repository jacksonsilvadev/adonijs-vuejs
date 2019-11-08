'use strict'

const User = use('App/Models/User');

class UserController {
  async login({
    request,
    response,
    auth
  }) {
    const {
      email,
      password
    } = request.only(['email', 'password']);

    const token = await auth.attemp(email, password)

    return response.json(token)
  }
  async regsiter({
    request,
    response
  }) {
    const data = request.only('first_name', 'last_name', 'email', 'password')

    await User.create(data);

    return response.send({
      message: 'User has been created'
    })
  }
}

module.exports = UserController
