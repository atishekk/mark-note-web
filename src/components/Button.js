import styled from 'styled-components';
import Theme from "./Theme"

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: ${Theme.color4};
  background-color: ${Theme.color3};
  cursor: pointer;
  padding: 10px;
  transition: 0.5s;
  box-shadow: 0px 0px 5px #666;

  :hover {
    background-color: ${Theme.color4};
    color: ${Theme.color3};
    box-shadow: 0px 0px 10px #666;
  }
  
  :active {
    background-color: #005fa3;
    box-shadow: 0px 0px 15px #666;
  }
`;

export default Button;
