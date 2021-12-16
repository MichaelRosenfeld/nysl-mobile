import React from 'react';
import Home from "./pages/Home";
import Games from "./pages/Games";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './index.css';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/games" element={<Games />}> </Route>
                </Routes>
            </Router>
    );
}

export default App;