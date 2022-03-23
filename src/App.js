import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './config/store';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
        <Header/>
        <Routes>
          <Route path="/" element={<PokemonsPage/>} exact />
          <Route path="/:pokemonName" element={<PokemonDetailPage/>} />
        </Routes>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}


export default App;
