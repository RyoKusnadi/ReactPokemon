import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/get-pokemons'

export function PokemonsContainer() {
  const gqlVariables = {
    limit: 10,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('Response from server', data);

  return (
    <div className="container">
      {data.pokemons.results.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}
