const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  avatar: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('User', UserSchema)
