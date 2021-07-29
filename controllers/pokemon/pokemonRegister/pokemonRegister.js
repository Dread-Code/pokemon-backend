const { UserInputError } = require('apollo-server')
const Pokemon = require('../../../models/pokemon')

const pokemonRegister = async (input, { user }) => {
  const newPokemon = input
  newPokemon.name = newPokemon.name.toUpperCase()

  const pokemonFound = await Pokemon.findOne({ name: newPokemon.name })
  if (pokemonFound) throw new UserInputError('Pokemon already exist')

  try {
    const pokemon = new Pokemon({ ...newPokemon, idUser: user.id })
    pokemon.save()
    return pokemon
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = pokemonRegister
