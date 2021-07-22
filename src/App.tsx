import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/container/Header';
import { Body } from './body/container/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;