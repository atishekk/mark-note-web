import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';
import UserForm from '../components/UserForm';

import {SIGNUP_USER} from '../gql/mutation';
import {AuthContext} from "./index"


const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input{
    width: 100%;
    margin-bottom: 1em;
  }
`;

const SignUp = props => {

  const {dispatch} = React.useContext(AuthContext);
  const [values, setValues] = useState();

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  });


  const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp);
      dispatch({
        type: "LOGIN"
      })
      props.history.push('/')
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating account!!</p>}
    </React.Fragment>
  );
};

export default SignUp;
