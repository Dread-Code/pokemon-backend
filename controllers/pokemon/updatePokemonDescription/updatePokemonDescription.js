const Pokemon = require('../../../models/pokemon')

const updatePokemonDescription = async ({ id, description }, { user }) => {
  try {
    const result = await Pokemon.findByIdAndUpdate({ _id: id, idUser: user.id }, { description })
    result.description = description
    return result
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updatePokemonDescription
