import React from 'react';
import styles from './About.scss';
import { I18n, Trans } from 'react-i18next';

const About = () => (
  <I18n ns="translations">
    {t => (
      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="title">ABOUT</h2>
            </div>

            <div className="col-xs-12">
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingLeft: 5, paddingRight: 5 }}>
                <p>Our mission – Founded in 2018 by Andrew Kerr, The GB DEX has already helped many 
                  clients enter into the complicated and daunting world of crypto. 
                  We noticed a demand for additional support, 
                  guidance and even new problems both new and not so new investors were facing.</p>
              </div>
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingRight: 5, paddingLeft: 5 }}>
                <p>This is why we have made it our misson to provide the best customer service and exchange 
                  the UK deserves and needed. With our non-custodial solution we never hold your assets, 
                  YOU as the customer are in complete control.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;
