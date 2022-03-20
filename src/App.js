import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import './index.css';

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
    <Header/>
    <Switch>
      <Route path="/" component={PokemonsPage} exact />
    </Switch>
    </ApolloProvider>
  );
}


export default App;
