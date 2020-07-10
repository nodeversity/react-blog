import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { AppProvider } from './contextData';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import BlogHome from './components/BlogHome';
import PostDetail from './components/blog/PostDetail';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
        <Route exact path="/" component={BlogHome} />
        <Route path="/:postUrl" component={PostDetail} />
        <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
