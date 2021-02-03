import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import history from './utils/history';
import Layout from './modules/layout';

const isBrowserSupportsHistory = 'pushState' in window.history;

function App() {
  return (
      <Router history={history} forceRefresh={!isBrowserSupportsHistory}>
        <Layout />
      </Router>
  );
}

export default App;
