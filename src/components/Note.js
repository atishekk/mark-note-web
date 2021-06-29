import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import Card from "./Card"
import FadeIn from "./FadeIn"
import NoteUser from './NoteUser';
import {IS_LOGGED_IN} from '../gql/query';
import { useQuery } from '@apollo/client';

const NoteWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
`;

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media(min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserAction = styled.div`
  margin-left: auto;
`;

const Note = ({note, index, feed}) => {

  const[isLoggedIn, update] = useState()

  useEffect(() => update(!!localStorage.getItem('token')))

  if(feed) return (
    <Card note={note} index = {index}/>
  )

  return(
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img src={note.author.avatar} alt={`${note.author.username} avatar`} height="50px" style={{borderRadius: "20px"}}/>
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(new Date(note.createdAt), 'MMM Do yyyy')}
        </MetaInfo>
        {isLoggedIn ? (
          <UserAction>
            <NoteUser note={note}/>
          </UserAction>
        ) : (
          <UserAction>
            <em>Favorites: </em> {note.favoriteCount}
          </UserAction>
        )}
      </MetaData>
      <ReactMarkdown children={note.content}/>
    </StyledNote>
  )
}

export default Note;
