import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Theme from "./Theme"

const StyledLink = styled(Link)`
  background: none;
  color: ${Theme.color3};
  border: none;
  padding: 10px;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;

  :hover,
  active{
    background-color: ${Theme.color4};
    color: ${Theme.color3};
    box-shadow: 0px 0px 10px #ddd;
  }
`;

export default StyledLink;
