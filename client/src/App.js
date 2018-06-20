import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: `https://localhost:5000/graphql/`
});

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello graphql</h2>
      </div>
    </ApolloProvider>
);

export default App;
