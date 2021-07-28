const { UserInputError } = require('apollo-server')
const bcryptjs = require('bcryptjs')
const User = require('../../models/user')
const { createToken } = require('../../utils/createToken/createToken')
const { emailValidation } = require('../../utils/validations/emailValidation')
const { passwordValidation } = require('../../utils/validations/passwordValidation')

const userRegister = async input => {
  const newUser = input

  newUser.email = newUser.email.toLowerCase()
  newUser.username = newUser.username.toLowerCase()
  const { email, username, password } = newUser

  const validateEmail = emailValidation(email)
  if (!validateEmail) throw new UserInputError('Email is not correct')

  const validatePassword = passwordValidation(password)
  if (validatePassword.length > 0)
    throw new UserInputError('There is an error in the password', {
      errors: validatePassword
    })

  const foundEmail = await User.findOne({ email })
  if (foundEmail) throw new UserInputError('Email Already Exist')

  const foundUsername = await User.findOne({ username })
  if (foundUsername) throw new UserInputError('Username Already Exist')

  const salt = await bcryptjs.genSaltSync(10)
  newUser.password = await bcryptjs.hash(password, salt)

  try {
    const user = new User(newUser)
    user.save()
    return user
  } catch (error) {
    return error
  }
}

const login = async input => {
  const { email, password } = input

  const userFound = await User.findOne({ email: email.toLowerCase() })
  if (!userFound) throw new Error('Email is not correct')

  const passwordSucces = await bcryptjs.compare(password, userFound.password)
  if (!passwordSucces) throw new Error('Password is not correct')

  const exp = 60 * 20
  return {
    token: createToken(userFound, process.env.SECRET_KEY, exp)
  }
}

module.exports = {
  userRegister,
  login
}
