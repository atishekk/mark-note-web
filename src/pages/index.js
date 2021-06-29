import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';

import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';

const PrivateRoute = ({component: Component, ...rest}) => {

  const[isLoggedIn, update] = useState(!!localStorage.getItem('token'));

  useEffect(() => update(!!localStorage.getItem('token')))
  return (
    <Route
      {...rest}
      render={props => isLoggedIn === true ?
        (
          <Component {...props} />
        ): (
          <Redirect to={{
            pathname: '/signIn',
            state: {from: props.location}
          }} />
        )
      }
    />
  );
};

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/mynotes' component={MyNotes} />
        <PrivateRoute path='/favorites' component={Favorites} />
        <Route path='/note/:id' component={NotePage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <PrivateRoute path='/new' component={NewNote} />
        <PrivateRoute path="/edit/:id" component={EditNote} />
      </Layout>
    </Router>
  )
}

export default Pages;
