import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsPage } from './components/pokemonList/pokemonList.pages'
import { PokemonDetailPage } from './components/pokemonDetail/pokemonDetail.pages';

import {Header} from './components/header/header.component'


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
  })
  return (
    <ApolloProvider client={client}>
    <Header/>
    <Routes>
      <Route path="/" element={<PokemonsPage/>} exact />
      <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage/>} />
    </Routes>
    </ApolloProvider>
  );
}


export default App;
