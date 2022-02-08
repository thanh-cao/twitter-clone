import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/login" element={<LogIn />} />
            <Route path="/users/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
