import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GlobalProvider } from './contextData';
import { Header } from './components/layout/Header'
import { BlogHome } from './components/BlogHome'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <BlogHome />
      </div>
    </GlobalProvider>
  );
}

export default App;
