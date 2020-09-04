import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import config from 'Config';
import { fetchPrice } from 'Actions/index.js';
import styles from './CoinPrices.scss';

class CoinPrices extends Component {
  state = {
    rates: {
      btccad: '',
      ethcad: '',
      ltccad: '',
      bchbtc: '',
      ethbtc: '',
      bchusd: '',
      btcusd: '',
      ltcusd: '',
      ethusd: '',
    },
    change: {
      btccad: '',
      ethcad: '',
      ltccad: '',
      bchbtc: '',
      ethbtc: '',
      bchusd: '',
      btcusd: '',
      ltcusd: '',
      ethusd: '',
    },
  };

  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices = () => {
    this.fetchPrice('btccad');
    this.fetchPrice('ethcad');
    this.fetchPrice('ltccad');
    this.fetchPrice('bchbtc');
    this.fetchPrice('ethbtc');
    this.fetchPrice('bchusd');
    this.fetchPrice('btcusd');
    this.fetchPrice('ltcusd');
    this.fetchPrice('ethusd');

    this.timeout = setTimeout(() => {
      this.fetchPrices();
    }, config.PRICE_FETCH_INTERVAL);
  };

  fetchPrice = pair => {
    const url = `${config.API_BASE_URL}/price/${pair}/latest/`;

    axios
      .get(url)
      .then(response => {
        if (!response.data.length) return;

        const rates = this.state.rates;
        const rate = parseFloat(response.data[0].ticker.ask);

        if (rates[pair] !== '') {
          let change = this.state.change;

          if (rate > rates[pair]) change[pair] = styles.up;
          else if (rate < rates[pair]) change[pair] = styles.down;

          this.setState({ change });
        }

        rates[pair] = rate;
        this.setState({ rates });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="container">
            <Link to={{ pathname: '/', search: '?pair=BTCCAD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['btccad']}`}
                ref={el => {
                  this.btccad = el;
                }}
              >
                <h5>
                  BTC/CAD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.btccad ? this.state.rates.btccad.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=ETHCAD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['ethcad']}`}
                ref={el => {
                  this.ethcad = el;
                }}
              >
                <h5>
                  ETH/CAD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.ethcad ? this.state.rates.ethcad.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=LTCCAD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['ltccad']}`}
                ref={el => {
                  this.ltccad = el;
                }}
              >
                <h5>
                  LTC/CAD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.ltccad ? this.state.rates.ltccad.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=BCHBTC' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['bchbtc']}`}
                ref={el => {
                  this.bchbtc = el;
                }}
              >
                <h5>
                  BCH/BTC <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.bchbtc ? this.state.rates.bchbtc.toFixed(4) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=ETHBTC' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['ethbtc']}`}
                ref={el => {
                  this.ethbtc = el;
                }}
              >
                <h5>
                  ETH/BTC <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.ethbtc ? this.state.rates.ethbtc.toFixed(4) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=BCHUSD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['bchusd']}`}
                ref={el => {
                  this.bchusd = el;
                }}
              >
                <h5>
                  BCH/USD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.bchusd ? this.state.rates.bchusd.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=BTCUSD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['btcusd']}`}
                ref={el => {
                  this.btcusd = el;
                }}
              >
                <h5>
                  BTC/USD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.btcusd ? this.state.rates.btcusd.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=LTCUSD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['ltcusd']}`}
                ref={el => {
                  this.ltcusd = el;
                }}
              >
                <h5>
                  LTC/USD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.ltcusd ? this.state.rates.ltcusd.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=ETHUSD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['ethusd']}`}
                ref={el => {
                  this.ethusd = el;
                }}
              >
                <h5>
                  ETH/USD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.ethusd ? this.state.rates.ethusd.toFixed(2) : '...'}</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCoin, amounts, price }) => ({ selectedCoin, amounts, price });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchPrice }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoinPrices);
