const Pokemon = require('../../../models/pokemon')

const deletePokemon = async (input, { user }) => {
  try {
    const result = await Pokemon.findOneAndDelete({ _id: input, idUser: user.id })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deletePokemon
