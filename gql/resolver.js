const userController = require('../controllers/user')

const resolver = {
  Query: {
    getUser: () => {
      console.log('Get user')
      return null
    }
  },
  Mutation: {
    userRegister: async (_, { input }) => userController.userRegister(input)
  }
}

module.exports = resolver
