import React, { useState, useRef } from 'react'
import { useParams, useLocation  } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON_DETAIL } from '../../graphql/get-pokemons';
import { Wrapper, ImageContainer, Image, PokemonContainer, Text } from './pokemonDetail.styles';
import { PokemonDetail } from './pokemonDetail.component';
import { PokemonStatus } from './pokemonStatus.component';

export function PokemonDetailPage() {
  const {pokemonName} = useParams();
  const { state } = useLocation();
  const { image } = state;

  const timer = useRef();
  const [load, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleButtonClick = () => {
      if (!load) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
              let catched = Math.random() < 0.5;
              setSuccess(catched);
              if (catched) {
                  // True Condition
              } else {
                  // False Condition
              }
              setLoading(false);
          }, 1000);
      }
  };

  const gqlVariables = {
    name: pokemonName,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  // console.log('Response from server', data);

  return (
    <Wrapper>
      <PokemonContainer>
        <ImageContainer>
            <Image src={image} alt={pokemonName}></Image>
            <div>
                <h1>Pokemon: {pokemonName[0].toUpperCase() + pokemonName.substring(1)}</h1>
                <Text>TYPES</Text>
                  {data.pokemon.types.map(data => <PokemonDetail key={data.type.name} data={data.type} />)}
                  {data.pokemon.stats.map(data => <PokemonStatus key={data.stat.name} data={data} />)}
                <button 
                  success={success ? true : undefined} 
                  loading={loading ? true : undefined}
                  onClick={handleButtonClick} 
                  > Catch 
                </button>
            </div>
          </ImageContainer>
          <Text>MOVES</Text>
          {data.pokemon.moves.map(data => <PokemonDetail key={data.move.name} data={data.move} />)}
      </PokemonContainer>
    </Wrapper>
  )
}
