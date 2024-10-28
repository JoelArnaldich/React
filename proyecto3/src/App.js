import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Main 
                    title="Sobre Nosaltres" 
                    content="Som una empresa dedicada a..." 
                />
                <Footer />
            </div>
        </Router>
    );
}

export default App;