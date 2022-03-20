import React from 'react'
import {BackgroundDiv, IdNumber, PokemonImg, PokemonWrapper, PokemonTitle } from './pokemonList.styles.jsx'
import { useNavigate } from "react-router-dom";

export function PokemonList({ pokemon }) {
  const history = useNavigate();
  return (
    <BackgroundDiv onClick={() => history(`/pokemon/${pokemon.name}`)}>
      <IdNumber><small>{pokemon.id > 9 ? '#': '#0'}{pokemon.id}</small></IdNumber>
      <PokemonImg src={pokemon.artwork} alt={pokemon.name}></PokemonImg>
      <PokemonWrapper>
        <PokemonTitle>{pokemon.name}</PokemonTitle>
      </PokemonWrapper>
    </BackgroundDiv>
  )
}