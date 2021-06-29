import React, {useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import {AuthContext} from "../pages/index"
import FadeIn from "./FadeIn"
import NoteUser from './NoteUser';
import {IS_LOGGED_IN} from '../gql/query';
import { useQuery } from '@apollo/client';

const StyledNote = styled.article`
  width: 400px;
  margin: 0 auto;
  @media(max-width: 1250px){
    width: 100%;
  }
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

const Truncate = styled.div`
  width: 400px;
  height: 200px;
  padding: 10px;
  text-overflow: ellipsis;
  word-wrap: normal;
  overflow: hidden;
  @media(max-width: 1250px){
    width: 100%;
  }
`;

const Image = styled.img`
  width: 400px;
  @media(max-width: 1250px){
  width: 100%;
  }
`

const Card = ({note, index}) => {

  const {state} = useContext(AuthContext);

  return(
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img src={note.author.avatar} alt={`${note.author.username} avatar`} height="50px" style={{borderRadius: "20px"}}/>
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(new Date(note.createdAt), 'MMM do yyyy')}
        </MetaInfo>
        {state.isAuthenticated ? (
          <UserAction>
            <NoteUser note={note}/>
          </UserAction>
        ) : (
          <UserAction>
            <em>Favorites: </em> {note.favoriteCount}
          </UserAction>
        )}
      </MetaData>
        <Image src={`https://source.unsplash.com/collection/327760/800x450/?sig=${index}`} alt="cover nature image"/>
        <Truncate>
          <ReactMarkdown children={note.content}/>
        </Truncate>
    </StyledNote>
  )
}

export default Card;
