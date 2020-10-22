import React, { useState } from 'react';

import { I18n } from 'react-i18next';
import { NavLink as Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showSupportModal } from 'Actions';

import styled from '@emotion/styled';

const paymentGateways = ['mastercard', 'visa'];

const Footer = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <I18n ns="translations">
            {t => (
              <StyledFooter>
                <section className="links">
                  <main className="">
                    <section className="logo">
                      <Link to="/">
                        <img src="/img/logo.png" alt="ValorEx Logo" />
                      </Link>
                    </section>
                    <section>
                      <h4>{t('header.resources')}</h4>
                      <ul>
                        <li>
                          <Link
                            onClick={() => {
                              props.showSupportModal(true);
                            }}
                            to="#"
                          >
                            {t('header.support')}
                          </Link>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h4>{t('header.about')}</h4>
                      <ul>
                        <li>
                          <HashLink smooth to={`/#about`}>
                            {t('header.about')}
                          </HashLink>
                        </li>
                        <li>
                          <Link to={`/faqs`}>{t('header.faq')}</Link>
                        </li>
                        <li>
                          <span />
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h4>{t('footer.popular-pairs')}</h4>
                      <PopularPairs />
                    </section>
                    <section>
                      <h4>{t('header.social')}</h4>
                      <ul>
                        <li>
                          <a href="/twitter" target="_blank" rel="noopener noreferrer">
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="/fb" target="_blank" rel="noopener noreferrer">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="/instagram" target="_blank" rel="noopener noreferrer">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="/telegram" target="_blank" rel="noopener noreferrer">
                            Telegram
                          </a>
                        </li>
                      </ul>
                    </section>
                  </main>
                  <aside>
                    <div className="compliance">
                      {paymentGateways.map(e => (
                        <img src={`/img/compliance/${e}.svg`} alt="e" className={e} key={e} />
                      ))}
                    </div>

                    <p>
                      <CopyrightNotice />
                    </p>
                    <p>
                      <Link to={`/terms-and-conditions`}>{t('header.terms-and-conditions')}</Link>
                      <span> — </span>
                      <Link to={`/privacy`}>{t('header.privacy-policy')}</Link>
                    </p>
                  </aside>
                </section>
              </StyledFooter>
            )}
          </I18n>
        </div>
      </div>
    </div>
  );
};
/*
ETH to BTC
BTC to ETH
LTC to ETH
USDT to BTC
BTC to XMR
BTC to USDT
*/
const defaultPairs = [
  ['USD', 'BTC'],
  ['USD', 'BCH'],
  ['USD', 'ETH'],
  ['USD', 'LTC'],
  ['USD', 'ZEC'],
];
const PopularPairs = () => {
  const [pairs] = useState(defaultPairs);
  return (
    <ul>
      {pairs.map(([quote, base]) => (
        <li key={`${base}${quote}`}>
          <HashLink smooth to={`/?pair=${base}${quote}#exchange`}>
            {quote} to {base}
          </HashLink>
        </li>
      ))}
    </ul>
  );
};

const CopyrightNotice = () => <>Copyright &copy; {new Date().getFullYear()} ValorEx. All rights reserved.</>;

const StyledFooter = styled.footer`
  > section {
    padding: 12px 0;
    h4 {
      text-transform: uppercase;
      font-weight: bold;
    }
    ul {
      > li {
        display: block;
        > a {
          text-transform: none;
          padding: 0;
        }
        > span {
          display: block;
          height: 2rem;
        }
      }
    }

    &.links {
      display: flex;
      flex-direction: column;
      > main {
        display: flex;
        justify-content: center;
        @media screen and (max-width: 640px) {
          flex-direction: column;
        }
        > section {
          width: 180px;
          padding: 0 2rem;
          &.logo {
            width: 24rem;
          }
          @media screen and (max-width: 640px) {
            width: 100%;
            &:not(:last-child) {
              margin-bottom: 2rem;
            }
          }
        }
      }
      > aside {
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 4rem 0 0;
       
        > p {
          margin: 2rem 0 0;
          font-size: 1rem;
          text-align: center;
          a {
            text-transform: uppercase;
            color: #000;
          }
        }
        .compliance {
          display: flex;
          justify-content: center;
          align-items: center;
          
          img {
            max-width: 60px;
            display: inline-block;
            &:not(:last-child) {
              margin-right: 1rem;
            }

            &.mastercard {
              max-height: 32px;
            }
            
          }
        }
        .compliance2 {
          display: inline-block;
          
          justify-content: center;
          align-items: center;
          
          img {
            max-width: 60px;
            display: inline-block;
            margin: 0 1rem;
            

            &.kurs {
              max-height: 23px;
            }
            
          }
        }
        }
        
          
        > ul {
          display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;
          > li {
            padding: 0;
            &:not(:last-child) {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
`;

const mapStateToProps = ({ supportModal }) => ({ supportModal });
const mapDispatchToProps = dispatch => bindActionCreators({ showSupportModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer));
