import React from 'react';
import { I18n, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.scss';

const Footer = () => (
  <I18n ns="translations">
    {t => (
      <footer className={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <p className={styles.address}>All rights reserved, The GB DEX {new Date().getFullYear()}, Britain </p>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-6">
              <ul className={styles.links}>
                <li>
                  <Link to="/terms-and-conditions">{t('footer.1')}</Link>
                </li>
                <li>
                  <Link to="/privacy">{t('footer.2')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )}
  </I18n>
);

export default Footer;
