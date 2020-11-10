import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import urlParams from 'Utils/urlParams';
import config from 'Config';
import Cookies from 'js-cookie';

class Referrals extends Component {
  componentDidMount() {
    axios.interceptors.request.use(
      function(requestConfig) {
        let referral = config.REFERRAL_CODE ? config.REFERRAL_CODE : localStorage.getItem('referral');
        if (referral && requestConfig.url && requestConfig.url.indexOf(config.API_BASE_URL.toLowerCase()) > -1)
          requestConfig.headers['x-referral-token'] = referral;

        return requestConfig;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }

  checkNotRef(queryParam) {
    return !queryParam.includes('ref=');
  }

  redirectRef() {
    let url = window.location.pathname + window.location.search + window.location.hash;
    let baseUrl = url.split('?')[0];
    let queryParams = url.split('?')[1].split('&');
    queryParams = queryParams.filter(this.checkNotRef);
    queryParams = '?'.concat(queryParams.join('&'));
    let urlWithoutRef = baseUrl.concat(queryParams);

    return <Redirect to={urlWithoutRef} />;
  }

  render() {
    let params = urlParams();
    if (params != null && params.hasOwnProperty('ref')) {
      const referralCode = params['ref'];
      localStorage.setItem('referral', referralCode);

      if (referralCode.toLowerCase() === '5usdfree') {
        Cookies.set('5usdfree', 'eligible', { expires: 365 });
      }
      return this.redirectRef();
    }

    return null;
  }
}

export default Referrals;
