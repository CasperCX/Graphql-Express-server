import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, HttpLink, defaultDataIdFromObject  } from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory'; //NEW
import { ApolloProvider } from 'react-apollo';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import CourseCreate from './Components/CourseCreate';
import config from './config/config';

import Test from './Components/Test';

const httpLink = new HttpLink({ uri: `http://${config.DOMAIN}${config.PORT}/graphql` })

const cache = new InMemoryCache({
    dataIdFromObject: object => object.id
  });

const client = new ApolloClient({
    link: httpLink,
    cache,
    defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
        query: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'all',
        }
    }
})

// ENABLE REFETCHING
// changing the default fetchPolicy to:
//     "cache-first" to "cache-and-network"



const Root = () => (
    <ApolloProvider client={client}>
        <Router history={history}>
        <div>
            <Route path="/" component={Courses} exact></Route>
            <Route path="/test" component={Test} exact></Route>
            <Route path="/create" component={CourseCreate} exact></Route>
            <Route path="/course/:id" component={CourseDetail}></Route>
        </div>
        </Router>
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


//CACHE OPTIONS
// const defaultOptions = {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//       errorPolicy: 'all',
//     },
//     query: {
//       fetchPolicy: 'cache-and-network',
//       errorPolicy: 'all',
//     },
//     mutate: {
//       errorPolicy: 'all',
//     },
//   };
