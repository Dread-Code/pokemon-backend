const Pokemon = require('../../../models/pokemon')

const getPokemons = async () => {
  try {
    const result = await Pokemon.find({ public: true }).populate('idUser')
    return result
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getPokemons
