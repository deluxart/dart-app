import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';
import logo from '../images/logo.svg';

import styles from './header.module.scss';

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const navIconToggle = () => {
    setActiveNav(!activeNav);
  };

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
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={cx(styles.nav_icon, activeNav && styles.nav_icon_active)} onClick={navIconToggle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
