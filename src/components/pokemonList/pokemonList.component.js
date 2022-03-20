import React from 'react'
import { Inner, PokemonItemName, PokemonItemImage, PokemonItemImageDetail } from './pokemonList.styles.jsx'

export function PokemonList({ pokemon }) {
  return (
    <Inner>
        <PokemonItemName>{pokemon.name}
          <PokemonItemImage>
            <PokemonItemImageDetail src={pokemon.image} alt={pokemon.name}/>
          </PokemonItemImage>
        </PokemonItemName>
    </Inner>
  )
}
