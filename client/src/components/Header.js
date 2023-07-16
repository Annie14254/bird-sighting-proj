import React, { useState, useEffect } from "react";
import { Container, Image, Card, Row, Col } from 'react-bootstrap'
import "../styles/Header.css"
// import { useUserContext } from "../ctx/UserContext";

const Header = () => {
    // const {currUser, logout} = useUserContext()

    return(
        <Container className="header-container">
            <h1>Bird Watch</h1>
            <Container className="nav-container">
                 
                    <ul className="navbar-parent">
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Signup Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login Page</a>
                    </li>
                    </ul>
            </Container>
        </Container>
    )
    }
export default Header