import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <Link to={'/'}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className={styles.header__nav}>
            <ul>
              <li>
                <NavLink to={'/about'} activeClassName={styles.header__nav_active}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={'/services'} activeClassName={styles.header__nav_active}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to={'/portfolio'} activeClassName={styles.header__nav_active}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to={'/contacts'} activeClassName={styles.header__nav_active}>
                  <i className="icon-ok" />
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
