const userController = require('../controllers/user')
const pokemonController = require('../controllers/pokemon')

const resolver = {
  Query: {
    getUser: () => {
      console.log('Get user')
      return null
    },
    searchPokemon: async (_, { search }) => pokemonController.searchPokemon(search),
    getPokemons: async () => pokemonController.getPokemons(),
    getUserPokemons: async (_, {}, ctx) => pokemonController.getUserPokemons(ctx)
  },
  Mutation: {
    /**
     * User
     */
    userRegister: async (_, { input }) => userController.userRegister(input),
    login: async (_, { input }) => userController.login(input),

    /**
     * Pokemon
     */
    pokemonRegister: async (_, { input }, ctx) => pokemonController.pokemonRegister(input, ctx),
    updatePokemonDescription: async (_, { input }, ctx) =>
      pokemonController.updatePokemonDescription(input, ctx),
    deletePokemon: async (_, { input }, ctx) => pokemonController.deletePokemon(input, ctx)
  }
}

module.exports = resolver
