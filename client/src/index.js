import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'; //ApolloClient
import { ApolloProvider } from 'react-apollo';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import CourseCreate from './Components/CourseCreate';
import config from './config/config';

const httpLink = new HttpLink({ uri: `http://${config.DOMAIN}${config.PORT}/graphql` })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const Root = () => (
    <ApolloProvider client={client}>
        <Router history={history}>
        <div>
            <Route path="/" component={Courses} exact></Route>
            <Route path="/create" component={CourseCreate} exact></Route>
            <Route path="/course/:id" component={CourseDetail}></Route>
        </div>
        </Router>
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
