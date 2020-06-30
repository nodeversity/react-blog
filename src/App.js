import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { GlobalProvider } from './contextData';
import { Header } from './components/layout/Header'
import { BlogHome } from './components/BlogHome'
import PostDetail from './components/blog/PostDetail';

function App() {
  return (
    <Router>
      <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
       <Route path="/" component={BlogHome} />
       <Route path="/:postUrl" component={PostDetail} />
      </div>
    </GlobalProvider>

    </Router>
  );
}

export default App;
