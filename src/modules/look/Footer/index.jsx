import React from 'react';
import styles from './footer.module.scss';
import SocialLinks from '../Socials';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div>
            <strong>DELUX-Art</strong> &#169; 2021
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
