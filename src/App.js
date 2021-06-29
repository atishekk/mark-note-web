import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  gql
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import Pages from './pages';
import GlobalStyle from './components/GlobalStyle';

const uri = process.env.API_URI || 'http://localhost:4000/api';

const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
