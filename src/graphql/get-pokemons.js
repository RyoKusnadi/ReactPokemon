import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
query MyQuery($limit: Int!){
  pokemons(limit: $limit){
    results {
      id
      name
      image
    }
  }
}
`