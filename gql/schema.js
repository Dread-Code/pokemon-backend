const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    description: String
    password: String
    createAt: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser: User
  }
  type Mutation {
    #User
    userRegister(input: UserInput): User
  }
`

module.exports = typeDefs
