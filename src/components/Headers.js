import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from 'url:../img/logo.svg';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';
import Theme from "./Theme"

const UserState = styled.div`
  margin-left: auto;
`

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color:${Theme.color1} ;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const StyledLink = styled(Link)`
  background: none;
  color: #0077cc;
  border: none;
  padding: 10px;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;

  :hover,
  active{
    background-color: #0077cc;
    color: #fff;
    box-shadow: 0px 0px 10px #ddd;
  }
`;

const Logo = styled.img`
  background-color:${Theme.color4};
  padding: 5px;
`

const Header = props => {

  const[isLoggedIn, update] = useState(!!localStorage.getItem('token'))

  useEffect(() => update(!!localStorage.getItem('token')))

  return (
    <HeaderBar>
      <Logo src={logo} alt="Notedly Logo" height="55"/>
      <LogoText>Note</LogoText>
      <UserState>
        {isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              localStorage.removeItem('token');
              props.history.push('/')
            }}
          >
            Log Out
          </ButtonAsLink>
        ): (
          <p>
            <StyledLink to={'/signin'}>Sign In</StyledLink> or {'      '}
            <StyledLink to={'/signup'}>Sign Up</StyledLink>
          </p>
        )}
      </UserState>
    </HeaderBar>
  )
}

export default withRouter(Header);