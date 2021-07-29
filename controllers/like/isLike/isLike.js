const Like = require('../../../models/like')

const isLike = async (pokemonId, { user }) => {
  try {
    const result = await Like.findOne({ pokemonId }).where('idUser').equals(user.id)
    if (!result) return false
    return true
  } catch {
    return false
  }
}

module.exports = isLike
