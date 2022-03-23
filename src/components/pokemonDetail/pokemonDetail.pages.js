import React, { useState, useRef, useEffect } from 'react'
import { useParams, useLocation  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON_DETAIL } from '../../graphql/get-pokemons';
import { Wrapper, ImageContainer, Image, PokemonContainer, Text } from './pokemonDetail.styles';
import { PokemonDetail } from './pokemonDetail.component';
import { PokemonStatus } from './pokemonStatus.component';
import { addtoPokedexAction } from '../../action/action';

export function PokemonDetailPage() {
  const {pokemonName} = useParams();
  const { state } = useLocation();
  const { image } = state;

  const timer = useRef();
  const dispatch = useDispatch();

  const [load, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pokeInfo, setPokeInfo] = useState({});
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openFailedDialog, setOpenFailedDialog] = useState(false);

  const handleButtonClick = () => {
      if (!load) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
              let catched = Math.random() < 0.5;
              setSuccess(catched);
              if (catched) {
                setOpenSuccessDialog(true);
                console.log("Test")
              } else {
                setOpenFailedDialog(true);
              }
              setLoading(false);
          }, 1000);
      }
  };

  const addToPokedex = (name) => {
    let _poke = { ...pokeInfo };
    _poke['nickName'] = name;
    dispatch(addtoPokedexAction(_poke));
}

  // ========= lifecycle ======
  useEffect(() => {
    return () => {
        clearTimeout(timer.current);
    };
  }, []);

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
            </div>
          </ImageContainer>
          <Text>MOVES</Text>
          {data.pokemon.moves.map(data => <PokemonDetail key={data.move.name} data={data.move} />)}
      </PokemonContainer>
    </Wrapper>
  )
}
