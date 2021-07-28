const userController = require('../controllers/user')
const pokemonController = require('../controllers/pokemon')

const resolver = {
  Query: {
    getUser: () => {
      console.log('Get user')
      return null
    }
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
    pokemonRegister: async (_, { input }) => pokemonController.pokemonRegister(input)
  }
}

module.exports = resolver
