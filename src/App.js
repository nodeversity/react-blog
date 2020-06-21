import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header'
import { BlogHome } from './components/BlogHome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <BlogHome />
       
      </header>
    </div>
  );
}

export default App;
