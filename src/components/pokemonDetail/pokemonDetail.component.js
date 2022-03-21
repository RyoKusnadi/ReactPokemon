import React from 'react'
import { DetailContainer } from './pokemonDetail.styles'

export function PokemonDetail({ data }) {
    return (
    <div>
      <DetailContainer>{data.name.toUpperCase()}</DetailContainer>
    </div>
  )
}