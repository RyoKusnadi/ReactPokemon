import React, { useEffect } from 'react';

import './App.css';


import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsPage } from './pages/pokemons/pokemons.component'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
  })
  return (
    <ApolloProvider client={client}>
    <main>
      <PokemonsPage />
    </main>
    </ApolloProvider>
  );
}


export default App;
