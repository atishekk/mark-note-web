import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import {SIGN_IN_USER} from '../gql/mutation';

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  });

  const [signIn, {loading, error}] = useMutation(SIGN_IN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn);
      props.history.push('/');
    }
  })

  return(
    <React.Fragment>
      <UserForm action={signIn} formType='signIn' />
      {loading && <p>Loading....</p>}
      {error && <p>Error Signing In!!</p>}
    </React.Fragment>
  );
};

export default SignIn;
