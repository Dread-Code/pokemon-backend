const Like = require('../../../models/like')

const deleteLike = async (pokemonId, ctx) => {
  try {
    await Like.findOneAndDelete({ pokemonId }).where('idUser').equals(ctx.user.id)
    return true
  } catch (error) {
    return false
  }
}

module.exports = deleteLike
