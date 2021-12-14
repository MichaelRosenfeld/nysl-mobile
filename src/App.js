import React from 'react';
import './App.css';
import Home from "./routes/Home";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

function App() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/games">Games</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Home />
        </>
    );
}

export default App;
