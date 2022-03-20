import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON_DETAIL } from '../../graphql/get-pokemons';


export function PokemonDetailPage() {
  const {pokemonName} = useParams();
  const gqlVariables = {
    name: pokemonName,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('Response from server', data);


  return (
    <h1>Pokemon Detail Page - {pokemonName}</h1>
  )
}
