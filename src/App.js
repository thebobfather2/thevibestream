import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import UserProfile from "./components/UserProfile2";
import Music from './pages/Music';
import Chatbot from './pages/Chatbot';
import Settings from './pages/Settings';
import Login from "./Login";
import Register from './Register';
import './App.css';
import MidwestBoy from './pages/MidwestBoy';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <div className="content-wrapper">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/Marketplace'
              element={<Marketplace />}
            />
            <Route
              path='/Music'
              element={<Music />}
            />
            <Route
              path='/MidwestBoy'
              element={<MidwestBoy />}
            />
            <Route
              path='/Login'
              element={<Login />}
            />
            <Route
              path='/Register'
              element={<Register />}
            />
            <Route
              path='/Profile'
              element={<Profile />}
            />
            <Route
              path='/Chatbot'
              element={<Chatbot />}
            />
            <Route
              path='/Settings'
              element={<Settings />}
            />
            <Route 
            path="/profile/:userId" 
            element={<UserProfile />} 
            />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
