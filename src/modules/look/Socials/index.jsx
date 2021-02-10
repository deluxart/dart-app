import React from 'react';
import styles from './socials.module.scss';

const SocialLinks = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="https://www.behance.net/deluxart">
          <i className="icon-behance"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/itdeluxart">
          <i className="icon-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/delux_art_org/">
          <i className="icon-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://t.me/delux_art">
          <i className="icon-telegram"></i>
        </a>
      </li>
      <li>
        <a href="mailto:deluxart3@gmail.com">
          <i className="icon-mail-alt"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
