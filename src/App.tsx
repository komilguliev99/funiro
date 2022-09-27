import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Products } from './pages';
import './App.scss';
import { Header } from './layers';

function App() {
    return (
        <div className="App">
            <Header />
            <Router basename="/funiro">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/" element={<Products />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
