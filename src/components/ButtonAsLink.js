import styled from 'styled-components';
import Theme from "./Theme";

const ButtonAsLink = styled.button`
  background: none;
  color: ${Theme.color3};
  border: none;
  padding: 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;

  :hover,
  active{
    background-color: ${Theme.color3};
    color: ${Theme.color4};
    box-shadow: 0px 0px 10px #ddd;
  }
`;

export default ButtonAsLink;
