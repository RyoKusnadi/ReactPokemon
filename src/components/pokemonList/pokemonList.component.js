import React from 'react'
import {BackgroundDiv, IdNumber, PokemonImg, PokemonWrapper, PokemonTitle } from './pokemonList.styles.jsx'
import { useNavigate } from "react-router-dom";

export function PokemonList({ pokemon }) {
  const navigate = useNavigate();
  const toDetail =  () => navigate( `/${pokemon.name}`,  { state: { image: pokemon.artwork } });
  return (
    <BackgroundDiv onClick = {()=>{toDetail()}}>
      <IdNumber>{pokemon.name}</IdNumber>
      <PokemonImg src={pokemon.artwork} alt={pokemon.name}></PokemonImg>
      <PokemonWrapper>
        <PokemonTitle>Total Owned:{`${pokemon.id.toString().padStart(3, '0')}`}</PokemonTitle>
      </PokemonWrapper>
    </BackgroundDiv>
  )
}