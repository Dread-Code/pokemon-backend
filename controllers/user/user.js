const bcryptjs = require('bcryptjs')
const User = require('../../models/user')

const userRegister = async input => {
  const newUser = input

  newUser.email = newUser.email.toLowerCase()
  newUser.username = newUser.username.toLowerCase()
  const { email, username, password } = newUser

  const foundEmail = await User.findOne({ email })
  if (foundEmail) throw new Error('Email Already Exist')

  const foundUsername = await User.findOne({ username })
  if (foundUsername) throw new Error('Username Already Exist')

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

module.exports = {
  userRegister
}
