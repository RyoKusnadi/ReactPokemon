import React, { useEffect } from 'react';

import './App.css';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsPage } from './components/pokemonList/pokemonList.pages'

import {Header} from './components/header/header.component'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
  })
  return (
    <ApolloProvider client={client}>
    <main>
      <Header/>
      <PokemonsPage />
    </main>
    </ApolloProvider>
  );
}


export default App;
