const { Schema, model } = require('mongoose')

const pokemonSchema = Schema({
  name: {
    type: String,
    require: true
  },
  power: {
    type: Number,
    require: true
  },
  img: {
    type: String,
    require: true,
    trim: true
  },
  description: {
    type: String,
    require: true,
    trim: true
  },
  healthPoints: {
    type: Number,
    require: true,
    trim: true
  },
  type: {
    type: String,
    require: true,
    trim: true
  },
  gender: {
    type: String,
    require: true,
    trim: true
  }
})

module.exports = model('Pokemon', pokemonSchema)
