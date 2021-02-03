import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../look/Header';
import PortfolioPage from '../pages/portfolio';
import ErrorPage from '../pages/404';

const Layout = () => {
  return (
    <div className="App">
      <Header text="Hello world!" />
      <Switch>
        <Route path="/" render={() => <h1>Hello</h1>} exact />
        <Route path="/portfolio" component={PortfolioPage} exact />
        <Route
          path="/portfolio/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <p>Page {id}</p>;
          }}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Layout;
