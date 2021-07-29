const Like = require('../../../models/like')

const addLike = (pokemonId, { user }) => {
  try {
    const like = new Like({
      pokemonId,
      idUser: user.id
    })
    like.save()
    return true
  } catch {
    return false
  }
}

module.exports = addLike
