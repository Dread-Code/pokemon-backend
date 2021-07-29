const Pokemon = require('../../../models/pokemon')

const searchPokemon = async search => {
  const users = await Pokemon.find({
    public: true,
    name: { $regex: search, $options: 'i' }
  })
  return users
}

module.exports = searchPokemon
