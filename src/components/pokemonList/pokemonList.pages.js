import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PokemonList } from './pokemonList.component'
import { GET_POKEMONS } from '../../graphql/get-pokemons'

import {Button, ContainerDetail, PokemonContainer, Wrapper} from './pokemonList.styles.jsx'

export function PokemonsPage() {
  const gqlVariables = {
    limit: 200,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  // console.log('Response from server', data);

  return (
    <Wrapper>
      <h1>Pokemon List</h1>
      <PokemonContainer>
        <ContainerDetail>
          {data.pokemons.results.map(pokemon => <PokemonList key={pokemon.id} pokemon={pokemon} />)}
        </ContainerDetail>
      </PokemonContainer>
    </Wrapper>
  )
}
