import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Link} from "react-router-dom";

function App() {
    return (
        <>
            <Home />
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/games">Games</Link> |{" "}
            </nav>
        </>
    );
}

export default App;
