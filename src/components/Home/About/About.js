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
            Cryptocurrency Trading involves exchanging one cryptocurrency for another or buying and selling crypto using fiat money on an
            exchange. The concept is quite similar to foreign exchange (forex), where fiat currencies from across the world are traded 24
            hours a day.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
