const { UserInputError } = require('apollo-server')
const bcryptjs = require('bcryptjs')
const User = require('../../../models/user')
const { createToken } = require('../../../utils/createToken/createToken')

const login = async input => {
  const { email, password } = input

  const userFound = await User.findOne({ email: email.toLowerCase() })
  if (!userFound) throw new UserInputError('Email is not correct')

  const passwordSucces = await bcryptjs.compare(password, userFound.password)
  if (!passwordSucces) throw new UserInputError('Password is not correct')

  const exp = 60 * 20
  return {
    token: createToken(userFound, process.env.SECRET_KEY, exp)
  }
}

module.exports = login
