const jwt = require('jsonwebtoken')

const createToken = (user, SECRET_KEY, expiresIn) => {
  const { id, name, email, username } = user

  const payload = {
    id,
    email,
    name,
    username
  }

  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

module.exports = {
  createToken
}
