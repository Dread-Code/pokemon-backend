const Pokemon = require('../../../models/pokemon')

const getPokemons = async () => {
  const result = await Pokemon.find({ public: true }).populate('idUser')
  return result
}

module.exports = getPokemons
