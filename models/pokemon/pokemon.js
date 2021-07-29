const { Schema, model } = require('mongoose')

const pokemonSchema = Schema({
  name: {
    type: String,
    require: true
  },
  idUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
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
  pokemonType: {
    type: String,
    require: true,
    trim: true
  },
  public: {
    type: Boolean,
    require: true
  }
})

module.exports = model('Pokemon', pokemonSchema)
