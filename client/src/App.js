import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo';
import Courses from './Components/Courses';

// const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello graphql</h2>
        <Courses />
      </div>
    </ApolloProvider>
);

export default App;
