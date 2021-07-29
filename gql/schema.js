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

  type Token {
    token: String
  }

  type Pokemon {
    name: String
    power: Int
    img: String
    description: String
    healthPoints: Int
    pokemonType: String
    public: Boolean
    idUser: User
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input PokemonInput {
    name: String!
    power: Int!
    description: String!
    healthPoints: Int!
    pokemonType: String!
    public: Boolean!
  }

  type Query {
    # User
    getUser: User
    # Pokemon
    getPokemons: [Pokemon]
  }
  type Mutation {
    #User
    userRegister(input: UserInput): User
    login(input: LoginInput): Token
    #Pokemon
    pokemonRegister(input: PokemonInput): Pokemon
  }
`

module.exports = typeDefs
