const resolver = {
  Query: {
    getUser: () => {
      console.log('GEt user')
      return null
    }
  }
}

module.exports = resolver
