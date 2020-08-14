import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import urlParams from 'Utils/urlParams';
import config from 'Config';

class Referrals extends Component {
  componentDidMount() {
    axios.interceptors.request.use(
      function(requestConfig) {
        let referral, refUid;
        let params = urlParams();
        if (params && (params.hasOwnProperty('ref') || params.hasOwnProperty('ref_uid'))) {
          referral = params['ref']?.toString();
          refUid = params['ref_uid']?.toString();
        } else referral = config.REFERRAL_CODE ? config.REFERRAL_CODE : localStorage.getItem('referral');

        if (requestConfig.url && requestConfig.url.indexOf(config.API_BASE_URL.toLowerCase()) > -1) {
          if (referral) requestConfig.headers['x-referral-token'] = referral;

          if (refUid) requestConfig.headers['x-referral-uid'] = refUid;
        }

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
      localStorage.setItem('referral', params['ref']);
    }

    return null;
  }
}

export default Referrals;
