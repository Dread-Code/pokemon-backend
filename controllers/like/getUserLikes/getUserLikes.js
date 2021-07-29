const Like = require('../../../models/like')

const getUserLikes = async ({ user }) => {
  try {
    const result = await Like.find({ idUser: user.id }).populate('pokemonId')
    return result.map(({ pokemonId }) => pokemonId)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getUserLikes
