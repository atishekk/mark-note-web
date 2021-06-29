import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useQuery, gql, useApolloClient} from '@apollo/client';
import { LOGGED_IN } from '../gql/query';

import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const PrivateRoute = ({component: Component, ...rest}) => {
const {state} = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props => state.isAuthenticated === true ?
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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}>
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
      </AuthContext.Provider>
    </Router>
  )
}

export default Pages;
