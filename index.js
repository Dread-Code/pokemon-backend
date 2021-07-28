const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
    resolvers,
    context: ({ req, connection }) => {
      if (!connection) {
        // check connection for metadata
        const token = req.headers.authorization
        if (token) {
          try {
            const user = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY)
            return {
              user
            }
          } catch (error) {
            throw new Error('Token invalido')
          }
        }
      } else {
        return connection.context
      }
      return null
    }
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
