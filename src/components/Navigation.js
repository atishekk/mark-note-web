import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from './Theme'

const Nav = styled.nav`
  padding: 1em;
  background: ${Theme.color2};
  @media(max-width: 700px) {
    padding-top: 64px;
  }
  @media(min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
`;

const Option = styled.li`
  @media(max-width: 700px) {
    margin-top: 0px;
    a {
      padding: 0px;
    }
  }
  margin-top: 10px;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: ${Theme.color4};
    transition: 0.5s
  }
  a:visited {
    color: ${Theme.color4};
  }
  a:hover, a:focus, a:active {
    background-color: ${Theme.color4};
    color: ${Theme.color1};
    transform: scale(1.06);
  }
`


const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <Option>
          <Link to='/'>
            <span aria-hidden='true' role='img'>
              🏠
            </span>
            Home
          </Link>
        </Option>
        <Option>
          <Link to='/mynotes'>
            <span aria-hidden='true' role='img'>
              📝
            </span>
            My Notes
          </Link>
        </Option>
        <Option>
          <Link to='/favorites'>
            <span aria-hidden='true' role='img'>
              ✨
            </span>
            Favorites
          </Link>
        </Option>
        <Option>
          <Link to='/new'>
            <span aria-hidden='true' role='img'>
              ➕
            </span>
            New
          </Link>
        </Option>
      </NavList>
    </Nav>
  );
};

export default Navigation;
