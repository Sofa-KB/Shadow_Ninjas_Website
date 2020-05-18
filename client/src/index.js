import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Events from './pages/Events'
import Roster from './pages/Roster'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/'>
        <App />
      </Route>
      <Route path='/Home'>
        <Home />
      </Route>
      <Route path='/Events'>
        <Events />
      </Route>
      <Route path='/Roster'>
        <Roster />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
