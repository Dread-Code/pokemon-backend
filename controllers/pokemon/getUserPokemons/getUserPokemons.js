const Pokemon = require('../../../models/pokemon')

const getUserPokemons = async ({ user }) => {
  try {
    const result = await Pokemon.find({ idUser: user.id, public: false })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getUserPokemons
