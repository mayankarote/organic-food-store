import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProductList from "./ProductList";

const Menu = () => {
    return (
        <>
            <h5> 
                <NavLink to='/' component={Home} style={{ marginRight: 50, marginLeft: 50, color: "Black", textDecoration: 'none' }}>Home</NavLink>

                <NavLink to='/productlist' component={{ProductList}} style={{ marginRight: 50, marginLeft: 30, color: "Black", textDecoration: 'none' }}>Products</NavLink>
                
                <NavLink to='/about'  style={{ marginRight: 50, marginLeft: 30,color: "Black", textDecoration: 'none' }}>About Us</NavLink>

                <NavLink to='/login' component={{ Login }} style={{ marginRight: 50, marginLeft: 30, color: "Black", textDecoration: 'none' }}>Login/Register</NavLink>
                
            </h5>
        </>
    );
};
export default Menu;

