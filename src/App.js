import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        {
          renderRoutes(routes)
        }
      </Router>
    );
  }
}

export default App;
