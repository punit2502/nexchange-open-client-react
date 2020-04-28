import React from 'react';
import { I18n } from 'react-i18next';

import styles from './Features2.scss';

const Features2 = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className={`row ${styles.container}`}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1 className={`title ${styles.nomargin}`}>FEATURES</h1>
              <br/>
            </div>
            <div className={styles.features}>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/no-id-needed.svg" alt="transparent" />
                </div>
                <p className={styles.name}>NO ID NEEDED</p>
                <p className={styles.description}>Unless Buying With GBP, USD, RUB, EUR, JPY</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/decentralized.svg" alt="excellence" />
                </div>
                <p className={styles.name}>DECENTRALISED</p>
                <p className={styles.description}>A Global P2P Network</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/safe.svg" alt="customer service" />
                </div>
                <p className={styles.name}>SAFE</p>
                <p className={styles.description}>The GB DEX Never Holds Your Funds</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/easy-to-use.svg" alt="reliability" />
                </div>
                <p className={styles.name}>PRIVATE</p>
                <p className={styles.description}>All Personal Info If Any Is Stored Locally And Shared With No One</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/private.svg" alt="trust" />
                </div>
                <p className={styles.name}>OPEN SOURCE</p>
                <p className={styles.description}>Complete Transparency</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/open-source.svg" alt="reliability" />
                </div>
                <p className={styles.name}>EASY TO USE</p>
                <p className={styles.description}>Our Step By Step Video And Graphic Shows You 
                How To Buy Sell And Trade In Less Than 10 Mins</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default Features2;
