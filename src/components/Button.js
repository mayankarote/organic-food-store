import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.1rem solid black;
  border-color: ${props =>
    props.cart ? "black" : "black"};
  color: black;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0.9rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: lightgrey;
    background: ${props =>
      props.cart ? "lightgrey" : "lightgrey"};
  }
  &:focus {
    outline: none;
  }

`;

