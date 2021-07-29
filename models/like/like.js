const { Schema, model } = require('mongoose')

const LikeSchema = Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  idPokemon: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Pokemon'
  }
})

module.exports = model('Like', LikeSchema)
