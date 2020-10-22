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
      btcusd: '',
      ethusd: '',
      bchusd: '',
      ltcusd: '',
      zecusd: '',
      ethbtc: '',
      btcbch: '',
      bchbtc: '',
      btceth: '',
    },
    change: {
      btcusd: '',
      ethusd: '',
      bchusd: '',
      ltcusd: '',
      zecusd: '',
      ethbtc: '',
      btcbch: '',
      bchbtc: '',
      btceth: '',
    },
  };

  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices = () => {
    this.fetchPrice('btcusd');
    this.fetchPrice('ethusd');
    this.fetchPrice('bchusd');
    this.fetchPrice('ltcusd');
    this.fetchPrice('zecusd');
    this.fetchPrice('ethbtc');
    this.fetchPrice('btcbch');
    this.fetchPrice('bchbtc');
    this.fetchPrice('btceth');

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
                <h6>{this.state.rates.ltcusd ? this.state.rates.ltcusd.toFixed(4) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=ZECUSD' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['zecusd']}`}
                ref={el => {
                  this.zecusd = el;
                }}
              >
                <h5>
                  ZEC/USD <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.zecusd ? this.state.rates.zecusd.toFixed(4) : '...'}</h6>
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
                <h6>{this.state.rates.ethbtc ? this.state.rates.ethbtc.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=BTCBCH' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['btcbch']}`}
                ref={el => {
                  this.btcbch = el;
                }}
              >
                <h5>
                  BTC/BCH <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.btcbch ? this.state.rates.btcbch.toFixed(2) : '...'}</h6>
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
                <h6>{this.state.rates.bchbtc ? this.state.rates.bchbtc.toFixed(2) : '...'}</h6>
              </div>
            </Link>

            <Link to={{ pathname: '/', search: '?pair=BTCETH' }} replace={false}>
              <div
                className={`${styles['coin-price']} ${this.state.change['btceth']}`}
                ref={el => {
                  this.btceth = el;
                }}
              >
                <h5>
                  BTC/ETH <span className={styles.arrow} />
                </h5>
                <h6>{this.state.rates.btceth ? this.state.rates.btceth.toFixed(2) : '...'}</h6>
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
