import React, {useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import {GET_MY_NOTES} from '../gql/query';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes - MarkNote';
  });

  const {loading, error, data} = useQuery(GET_MY_NOTES);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>{`Error!! ${error.message}`}</p>;

  if(data.me.notes.length !== 0){
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No Notes yet</p>;
  }
}

export default MyNotes;
