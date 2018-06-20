import React, { Component } from 'react';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo';
import Courses from './Components/Courses';
import config from './config/config';

const httpLink = new HttpLink({ uri: `http://${config.DOMAIN}${config.PORT}/graphql` })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello graphql</h2>
        <Courses />
      </div>
    </ApolloProvider>
);

export default App;
