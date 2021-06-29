import React from 'react';
import Note from './Note';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledLink from "./StyledLink"
import Theme from "./Theme"

const Feed = styled.div`
  display: flex;
  flex-wrap: wrap
`

const NoteWrapper = styled.div`
  width: 500px;
  margin: 0px;
  padding: 40px;
  transition: 0.5s;
  @media(max-width: 1250px) {
    width: 100%;
    margin: 0px; 
    padding:20px;
  }
  :hover {
    background-color: ${Theme.color2};
    transform: scale(1.02);
  }
`;

// Added cover image https://source.unsplash.com/random/800x600/?nature

const NoteFeed = ({ notes }) => {
  return(
    <Feed>
      {notes.map((note, index) => (
        <NoteWrapper key={note.id}>
          <Note note={note} index={index} feed={true}/>
          <StyledLink to={{pathname: `note/${note.id}`, index: index, feed: false}} style={{marginTop: "20px"}}>Read More</StyledLink>
        </NoteWrapper>
      ))}
    </Feed>
  );
}

export default NoteFeed;
