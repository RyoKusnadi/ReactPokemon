import React from 'react'
import {BackgroundDiv, IdNumber, PokemonImg, PokemonWrapper, PokemonTitle } from './pokemonList.styles.jsx'

export function PokemonList({ pokemon }) {
  return (
    <BackgroundDiv>
      <IdNumber><small>{pokemon.id > 9 ? '#': '#0'}{pokemon.id}</small></IdNumber>
      <PokemonImg src={pokemon.artwork} alt={pokemon.name}></PokemonImg>
      <PokemonWrapper>
        <PokemonTitle>{pokemon.name}</PokemonTitle>
      </PokemonWrapper>
    </BackgroundDiv>
  )
}