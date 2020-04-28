import React from 'react';
import { I18n } from 'react-i18next';

import styles from './Britain.scss';

const Britain = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className={`container row ${styles.container}`}>
            <div className="col-sm-12 col-md-10 col-lg-7">
                <h1>BRITANS OWN BITCOIN EXCHANGE</h1>
            </div>
            <div className={`col-sm-12 col-md-10 col-lg-7 ${styles.subcontainer}`}>
                <span>Based In Glasgow, Scotland, UK, We're Your Local Cryptocurrency Exchange
                    Helping You Better Understand, Trade And Invest In Bitcoin. Get Started Today.
                </span>
            </div>
            <div className={`col-sm-12 ${styles.cardlist}`}>
              <div className="row">
                <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.cardouter}`}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <img src="/img/buy-in-seconds.svg" alt="Buy in seconds" />
                    </div>
                    <span>BUY IN SECONDS</span>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.cardouter}`}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <img src="/img/what-is-bitcoin.svg" alt="Buy in seconds" />
                    </div>
                    <span>WHAT IS BITCOIN?</span>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.cardouter}`}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <img src="/img/how-to-buy-bitcoin.svg" alt="Buy in seconds" />
                    </div>
                    <span>HOW TO BUY BITCOIN?</span>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.cardouter}`}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <img src="/img/instant-verification.svg" alt="Buy in seconds" />
                    </div>
                    <span>INSTANT VERIFICATION</span>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.cardouter}`}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <img src="/img/free-online-wallets.svg" alt="Buy in seconds" />
                    </div>
                    <span>FREE ONLINE WALLETS</span>
                  </div>
                </div>
                </div>
            </div>
        </div>
      )}
    </I18n>
  );
};

export default Britain;
