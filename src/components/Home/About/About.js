import React from 'react';
import styles from './About.scss';

const About = () => (
  <div id="about" className={styles.about}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="title">How Cryptocurrency Trading Works?</h2>
        </div>

        <div className="col-xs-12">
          <p className="desc">
            Cryptocurrency trading is the process of exchanging Fiat to cryptocurrency or cryptocurrency to cryptocurrency. The process of
            selling crypto after holding it is also a part of cryptocurrency trading. This entire process happens through a trustworthy
            exchange platform, and this is where you have to do a bit of research before trusting any platform with your crypto asset.
          </p>
          <p>
            The best option is to go for an exchange, which gives you the leverage to have complete control over your funds. Valorex is that
            crypto exchange platform, which enables the crypto users around the world to go through the trading process in a seamless way.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
