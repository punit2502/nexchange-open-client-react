import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoinDetails, fetchPairs, changeOrderMode } from 'Actions';
import SEO from 'Components/SEO/SEO';
import Hero from './Hero/Hero';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import RecentOrders from './RecentOrders/RecentOrders';
import SubscriptionForm from './SubscriptionForm/SubscriptionForm';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCoinDetails();
    this.props.fetchPairs();
  }
  componentDidUpdate(prevProps, prevState) {
    // Detect coin change by link
    const oldUrlParams = new URLSearchParams(prevProps.location.search);
    const oldPairParam = oldUrlParams.get('pair');
    const newUrlParams = new URLSearchParams(this.props.location.search);
    const newPairParam = newUrlParams.get('pair');
    if (newPairParam && newPairParam !== oldPairParam) {
      this.props.fetchCoinDetails();
      this.props.fetchPairs();
    }
  }

  render() {
    return (
      <>
        <SEO
          title="n.exchange | Exchange fiat & crypto instantly BTC BCH ETH LTC XMR XRP USD GBP EUR JPY"
          description="Cryptocurrency exchange. Fiat-enabled, Open-source, API-based. Anonymous trade of BTC
          (Bitcoin), ETH (Ethereum), LTC (Litecoin) and latest altcoins. Buy, sell and mix your crypto-currency."
          fullTitle
        />
        <div>
          <Hero {...this.props} />
          <RecentOrders />
          <Testimonials />
          <About />
          <SubscriptionForm />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ orderMode, coinsInfo, selectedCoin }) => ({ orderMode, coinsInfo, selectedCoin });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCoinDetails, fetchPairs, changeOrderMode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
