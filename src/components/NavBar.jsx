import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const navBar = (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/games">Games</Link>
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