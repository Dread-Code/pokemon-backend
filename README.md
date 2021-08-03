<img src="https://user-images.githubusercontent.com/60331479/128096552-694306be-5aa1-4c23-b23a-3236ee023062.png"/>


# Getting Started with Pokemon 57

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view apollo in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Tecnologies
* NodeJS
* GraphQL
* Apollo server
* MongoDB
* Mongoose
* jsonwebtoken
* Bucket in aws

## Best practices helpers
* Eslint
* Prettier


## Project Structure

```
.
├── controllers
│   ├── like
│   │   ├── addLike
│   │   │   └── addLike.js
│   │   ├── deleteLike
│   │   │   └── deleteLike.js
│   │   ├── getUserLikes
│   │   │   └── getUserLikes.js
│   │   ├── index.js
│   │   └── isLike
│   │       └── isLike.js
│   ├── pokemon
│   │   ├── deletePokemon
│   │   │   └── deletePokemon.js
│   │   ├── getPokemons
│   │   │   └── getPokemons.js
│   │   ├── getUserPokemons
│   │   │   └── getUserPokemons.js
│   │   ├── index.js
│   │   ├── pokemonRegister
│   │   │   └── pokemonRegister.js
│   │   ├── searchPokemon
│   │   │   └── searchPokemon.js
│   │   └── updatePokemonDescription
│   │       └── updatePokemonDescription.js
│   └── user
│       ├── index.js
│       ├── login
│       │   └── login.js
│       └── userRegister
│           └── userRegister.js
├── gql
│   ├── resolver.js
│   └── schema.js
├── index.js
├── models
│   ├── like
│   │   ├── index.js
│   │   └── like.js
│   ├── pokemon
│   │   ├── index.js
│   │   └── pokemon.js
│   └── user
│       ├── index.js
│       └── user.js
├── package.json
├── package-lock.json
└── utils
    ├── awsUploadImage
    │   ├── awsUploadImage.js
    │   └── index.js
    ├── createToken
    │   ├── createToken.js
    │   └── index.js
    └── validations
        ├── emailValidation
        │   ├── emailValidation.js
        │   └── index.js
        └── passwordValidation
            ├── index.js
            └── passwordValidation.js


```
