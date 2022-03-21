import React from 'react'
import { Text } from './pokemonDetail.styles'

export function PokemonStatus({ data }) {
    return (
    <div>
      <Text>{data.stat.name.toUpperCase()}: {data.base_stat}</Text>
    </div>
  )
}