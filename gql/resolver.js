const userController = require('../controllers/user')
const pokemonController = require('../controllers/pokemon')

const resolver = {
  Query: {
    getUser: () => {
      console.log('Get user')
      return null
    },
    getPokemons: async () => pokemonController.getPokemons()
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
    pokemonRegister: async (_, { input }, ctx) => pokemonController.pokemonRegister(input, ctx)
  }
}

module.exports = resolver
