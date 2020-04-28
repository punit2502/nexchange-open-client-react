import React from 'react';
import { I18n } from 'react-i18next';

import styles from './Features.scss';

const Features = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className={`row ${styles.container}`}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1 className={`title ${styles.nomargin}`}>OUR VALUES.</h1>
              <h1 className={`title ${styles.nomargin}`}>WE ARE SERIOUS ABOUT THEM.</h1>
              <br/>
              <span className={styles.subtitle}>We Believe Cryptocurrency Is The Future Of Finance 
              And Want To Provide Everyone With a Equal Chance and Opportunity To Be Part Of The Movement 
              And Potential Monetary Gains. Provide Easy Trusted And Transparent Access 
              To This Brand New And Exciting Asset Class.</span>
            </div>
            <div className={styles.features}>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/transparent.svg" alt="transparent" />
                </div>
                <p className={styles.name}>TRANSPARENT</p>
                <p className={styles.description}>We Are Upfront With Fees And Our Business Model</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/excellence.svg" alt="excellence" />
                </div>
                <p className={styles.name}>EXCELLENCE</p>
                <p className={styles.description}>We Are Continually Trying To Improve Our Service</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/customer-service.svg" alt="customer service" />
                </div>
                <p className={styles.name}>CUSTOMER SERVICE</p>
                <p className={styles.description}>We Strive To Provide The Best Customer Service Available</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/trust.svg" alt="trust" />
                </div>
                <p className={styles.name}>TRUST</p>
                <p className={styles.description}>We Are Non Custodial Which Means We Never 
                  Hold Our Customers Balances Giving You Complete Control Of Your Assets</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/reliability.svg" alt="reliability" />
                </div>
                <p className={styles.name}>RELIABILITY</p>
                <p className={styles.description}>Our Fast Trade Engine Ensures You Receive Your 
                  Assets Quicker Than Most If Not All Our Competitors</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default Features;
