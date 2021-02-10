import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '@modules/look/Header';
import Footer from '../look/Footer';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ServicesPage from '../pages/services';
import PortfolioPage from '../pages/portfolio';
import ContactsPage from '../pages/contacts';
import ErrorPage from '../pages/404';
import '../look/styles/_resources.scss';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Switch>
          {/* <Route path="/" render={() => ( */}
          {/*    <div className="container"><h1>Hello</h1></div> */}
          {/* )} exact /> */}
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/services" component={ServicesPage} exact />
          <Route path="/portfolio" component={PortfolioPage} exact />
          <Route path="/contacts" component={ContactsPage} exact />
          <Route
            path="/portfolio/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <p>Page {id}</p>;
            }}
          />
          <Route component={ErrorPage} />
        </Switch>
        <div className={styles.bg_lines}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
