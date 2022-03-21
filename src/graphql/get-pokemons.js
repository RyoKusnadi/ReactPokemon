import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
query MyQuery($limit: Int!){
  pokemons(limit: $limit){
    results {
      id
      name
      artwork
    }
  }
}
`

export const GET_POKEMON_DETAIL = gql`
query MyQuery($name: String!) {
    pokemon(name: $name) {
      name
      types {
        type {
          name
        }
      }
      moves{
        move{
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
}
`