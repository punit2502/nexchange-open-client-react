import React from 'react';
import styles from './Features.scss';

const Features = () => {
  return (
    <div id="features" className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="title">Why Valorex?</h2>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className={`card ${styles.featureCard}`}>
              <img className="card-img-top" src="/img/features/money.svg" alt="Card cap" />
              <div className="card-body">
                <p className={`card-text ${styles.cardText}`}>
                  Our mandate is to provide a secure and efficient exchange that is easy to navigate.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className={`card ${styles.featureCard}`}>
              <img className="card-img-top" src="/img/features/lock.svg" alt="Card cap" />
              <div className="card-body">
                <p className={`card-text ${styles.cardText}`}>
                  Valorex is a secure, well-designed and easy-to-use exchange-even for beginners.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className={`card ${styles.featureCard}`}>
              <img className="card-img-top" src="/img/features/thunder.svg" alt="Card cap" />
              <div className="card-body">
                <p className={`card-text ${styles.cardText}`}>Transactions are seamless, transparent and quick.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
