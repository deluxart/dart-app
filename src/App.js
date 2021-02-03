import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './modules/look/Header';
import history from './utils/history';
import PortfolioPage from './modules/pages/portfolio';
import ErrorPage from './modules/pages/404';

const isBrowserSupportsHistory = 'pushState' in window.history;

function App() {
  return (
      <Router history={history} forceRefresh={!isBrowserSupportsHistory}>
        <div className="App">
            <Header text="Hello world!"/>
            <Switch>
                <Route path="/" render={() => <h1>Hello</h1>} exact/>
                <Route path="/portfolio" component={PortfolioPage} exact/>
                <Route path="/portfolio/:id" render={({ match }) => {
                    const { id } = match.params;
                    return (
                        <p>Page {id}</p>
                    );
                }} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
