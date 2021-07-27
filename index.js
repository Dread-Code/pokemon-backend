const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolver')
require('dotenv').config({ path: '.env' })

const server = () => {
  const serverApollo = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs,
    resolvers
  })
  serverApollo.listen().then(({ url }) => {
    console.log(`Server on: ${url}`)
  })
}

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log('Error de conexión')
    } else {
      server()
    }
  }
)
