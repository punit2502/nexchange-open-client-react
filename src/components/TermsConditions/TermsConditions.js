import React from 'react';
import { I18n } from 'react-i18next';

const TermsConditions = () => {
  window.scrollTo(0,0);
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className="row">
            <div className="col-xs-12" style={{ marginTop: 80 }}>
                <h2>{t('terms.title')}</h2>
                {/* eslint max-len: ["error", { "code": 9999 }] */ }
                <p>The GB DEX is an Exchange which allows you to exchange crypto and fiat currencies with the best exchange rate. Terms “We”, “Exchange”, “Exchange operator” refer to CryptoFX.</p>
                <p>By using CryptoFX, you agree to these conditions. Please read them carefully. If you do not agree with the terms and conditions in this Agreement you may not use the Exchange.</p>
                <p>We reserve the right to make changes to our site, policies and terms of use at any time. The content of the pages of the website is for your general information and use only. It is subject to change without notice.</p>
                <p>The GB DEX is not responsible for any loss caused by any reason while working with the Exchange. Any kind of losses caused by the third party activities has to be handled by the user.</p>
                <p>The GB DEX takes an exchange fee for using the service. The fee is 0.5% of the transaction volume for cryptocurrency to cryptocurrency transitions on cryptocurrency majors (BTC, ETH, LTC and similar), 1% on minors (the rest) and 2% on fiat pairs (such as BTCEUR). In addition to those 2%, a payment processor fee of 5%-7% might be applicable depending on the currency and the payment method chosen by you.</p>
                <p>All fees are transparent and already included in the calculated order price. The fee can be a subject to reasonable fluctuations due to the mathematical rounding.</p>
                <p>Transactions cannot be canceled by CryptoFX. Therefore, check your payment details before making transaction. The GB DEX is not responsible for your coins once they have been sent to the wallet.</p>
                <p>The GB DEX doesn’t guarantee the uptime of the exchange. Maintenance and downtime may be required at times.</p>
                <p>By uploading or sharing any kind of content, you automatically grant us a worldwide license to use your content. It becomes part of the public domain as long as it remains on our website. It can be used for marketing or any other purposes by CryptoFX.</p>
                <p>You are prohibited from using or accessing The GB DEX from the following jurisdictions</p>
                <ol>
                  <li>New York State</li>
                  <li>Washington State</li>
                  <li>North Korea</li>
                </ol>
                <p>Transactions from users in these jurisdictions are prohibited, and The GB DEX may seize any funds from users in these jurisdictions. By accessing this site or any services therein, you represent and warrant that you are not physically located in these prohibited jurisdictions.</p>
                <h3>Refund Policy</h3>
                <p>We will revert any trade by the request of the customer according to the current market rate, provided the opposite trade direction is supported at the time the refund is requested.</p>
                <p>Otherwise, no refunds are possible and it is the sole responsibility of the user to make sure that he controls the wallet the address of which he uses to receive funds from CryptoFX.</p>
                <p>On any case of a refund after more than a day after the purchase had been made, an administrative fee of 5% will be retained by CryptoFX.</p>
                <br />
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default TermsConditions;
