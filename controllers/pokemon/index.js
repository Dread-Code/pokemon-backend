const pokemonRegister = require('./pokemonRegister/pokemonRegister')
const getPokemons = require('./getPokemons/getPokemons')
const getUserPokemons = require('./getUserPokemons/getUserPokemons')
const updatePokemonDescription = require('./updatePokemonDescription/updatePokemonDescription')
const deletePokemon = require('./deletePokemon/deletePokemon')
const searchPokemon = require('./searchPokemon/searchPokemon')

module.exports = {
  pokemonRegister,
  getPokemons,
  getUserPokemons,
  updatePokemonDescription,
  deletePokemon,
  searchPokemon
}
