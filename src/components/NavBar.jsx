import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'

const navBar = (
    <Navbar className="NavBar" bg="light" variant="light">
        <Container>
            <Nav className="me-auto">
                <Button variant="outline-secondary"><Link to="/" className="NavLink">Home</Link></Button>
                <Button variant="outline-secondary"><Link to="/games" className="NavLink">Games</Link></Button>
            </Nav>
        </Container>
    </Navbar>
);

function NavBar() {
    return (
        <>
            {navBar}
        </>
    );
}

export default NavBar;