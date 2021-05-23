import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo1.jpg";
import { ButtonContainer } from "./Button";
import Menu from "./Menu";

export default class Navbar extends Component {
  render(Navbar) {
    return (
      <Nav className="navbar navbar-expand-sm px-sm-5 align-items-center sticky-top">
        
       {/* Logo */}
        <Link to="/" style={{ marginRight: 150, position: "absolute" }}>
          <img src={logo} alt="store" className="navbar-brand" style={{ width: 170,
            top: -10, marginTop: 80, borderRadius: 100}} />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" style={{ marginRight: 130, marginLeft: 130,  top: -10}}>MSP Organics Food</Link>
          </li>
        </ul>
        
        <Menu />

        {/* if customer is login -- display this part */}
        
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
   );
  }
}

const Nav = styled.nav`
  background: white
  .nav-link {
    position: relative
    color: Black !important;
    font-size: 1.3rem;
    text-transform:capitalize;
    padding: 10px;
    width: 100%;
    height: 90px;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
