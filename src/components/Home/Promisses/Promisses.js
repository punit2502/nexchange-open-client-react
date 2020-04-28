import React from 'react';
import { I18n } from 'react-i18next';

import styles from './Promisses.scss';

const Promisses = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className={`container row ${styles.container}`}>
        <h1>WHAT WE PROMISE</h1>
        <div className={`col-sm-12 col-md-8 col-lg-6 ${styles.promisse}`}>
            <img src="/img/promisse.svg" alt="promisse" />
            <span>Bitcoins Sent To You As Soon As We See The Payment.</span>
        </div>
        <div className={`col-sm-12 col-md-8 col-lg-6 ${styles.promisse}`}>
            <img src="/img/promisse.svg" alt="promisse" />
            <span>Promise Of A Full Refund If The Payment Arrives Late.</span>
        </div>
        <div className={`col-sm-12 col-md-8 col-lg-6 ${styles.promisse}`}>
            <img src="/img/promisse.svg" alt="promisse" />
            <span>Prompt Support During The UK Work Day.</span>
        </div>
        <div className={`col-sm-12 col-md-8 col-lg-6 ${styles.promisse}`}>
            <img src="/img/promisse.svg" alt="promisse" />
            <span>Leading Industry Best Practices Followed When It Comes To Security, Anti Money Laundering And Know Your Customer.</span>
        </div>
        </div>
      )}
    </I18n>
  );
};

export default Promisses;
