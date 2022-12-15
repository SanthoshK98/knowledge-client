import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from './Router';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
