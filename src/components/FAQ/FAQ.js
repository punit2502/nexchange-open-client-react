import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import Fuse from 'fuse.js';
import debounce from 'Utils/debounce';
import i18n from 'Src/i18n';

import QuestionAnswer from './QuestionAnswer/QuestionAnswer';
import Support from '../Header/Support/Support';
import styles from './FAQ.scss';

const FAQ_COUNT = 9;

class FAQ extends Component {
  constructor(props) {
    super(props);

    this.faqs = [];
    this.state = {
      loading: true,
      searchText: '',
      filteredQuestionsIds: Array(FAQ_COUNT)
        .fill()
        .map((e, i) => i + 1),
      showSupportModal: false,
      subject: '',
    };
  }

  componentDidMount() {
    window.gtag('event', 'FAQs open', { event_category: 'FAQ', event_label: `` });
  }

  showQuestion(id) {
    return this.state.filteredQuestionsIds.indexOf(id) !== -1;
  }

  closeSupportModal = () => this.setState({ showSupportModal: false });
  openSupportModal = subject => {
    this.setState({ showSupportModal: true, subject });
  };

  componentDidUpdate() {
    if (this.state.loading) {
      //Populate local FAQ Array
      const faqIdArray = Array(FAQ_COUNT)
        .fill()
        .map((e, i) => i + 1);
      let faqs = [];
      faqIdArray.forEach(id => {
        let faq = {
          id,
          question: i18n.t(`faq.ques${id}`),
          answer: i18n.t(`faq.ans${id}`),
        };
        faqs.push(faq);
      });
      this.faqs = faqs;

      //Show modal
      this.setState({
        loading: false,
      });
    }
  }

  handleChange(event) {
    const searchText = event.target.value;

    if (_.isEmpty(searchText.trim())) {
      this.setState({
        searchText: '',
        filteredQuestionsIds: Array(FAQ_COUNT)
          .fill()
          .map((e, i) => i + 1),
      });
      return;
    }

    const fuse = new Fuse(this.faqs, {
      shouldSort: true,
      threshold: 0.4,
      minMatchCharLength: 2,
      keys: ['question', 'answer'],
    });

    this.trackEvent(searchText);
    const searchResult = fuse.search(searchText);
    if (_.isEmpty(searchResult)) {
      window.gtag('event', 'FAQ not found', { event_category: 'FAQ', event_label: `${searchText}` });
    }

    const filteredQuestionsIds = _.sortBy(_.map(searchResult, 'id'));

    this.setState({
      searchText,
      filteredQuestionsIds,
    });
  }

  trackEvent = debounce(faqSearched => {
    window.gtag('event', 'FAQ searched', { event_category: 'FAQ', event_label: `${faqSearched}` });
  }, 100);

  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div className={styles.container}>
            <div className="container">
              <div className="col-xs-12">
                <div className={styles.brand}>
                  <h1>{t('faq.heading1')}</h1>
                  <h2>{t('faq.heading2')}</h2>
                </div>
              </div>
              <div className={`col-xs-12 ${styles.faqs}`}>
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <div className={`${styles.input}`}>
                    <i className={`fas fa-search`}></i>
                    <input
                      type="text"
                      className={`form-control`}
                      id="faq-search"
                      value={this.state.searchText}
                      onChange={event => this.handleChange(event)}
                      placeholder={t('faq.inputplaceholder')}
                    />
                  </div>
                </form>

                {_.isEmpty(this.state.filteredQuestionsIds) ? (
                  <div className={styles.notfound}>
                    <h3>{t('faq.notfound')}</h3>
                    <a onClick={() => this.openSupportModal(this.state.searchText)}>{t('faq.openticket')}</a>
                  </div>
                ) : (
                  <div id="faq.list" className={styles.list}>
                    {this.showQuestion(1) ? (
                      <QuestionAnswer
                        id="ques2"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>
                              We allow you to exchange one cryptocurrency for another. To view our currently supported coins, please click
                              on the coin selection widget in the top of fold of the page.
                            </p>
                            <p>We will be adding more currencies very soon, stay tuned!</p>
                            <p>
                              Missing your favorite coin? Let us know here: <a href="mailto:support@valorex.io">support@valorex.io</a>.
                            </p>
                          </div>
                        }
                      />
                    ) : null}

                    {this.showQuestion(2) ? (
                      <QuestionAnswer
                        id="ques4"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <p>
                            Initiating a transaction doesn’t take more than a couple of minutes. The actual processing takes about 10–60
                            minutes before you receive your coins in your desired currency. The transaction time depends on the selected
                            currencies and their respective blockchains.
                          </p>
                        }
                      />
                    ) : null}

                    {this.showQuestion(3) ? (
                      <QuestionAnswer
                        id="ques5"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>Here is how you use the exchange:</p>
                            <ol>
                              <li>
                                <b>Enter</b> your desired <b>amount, choose</b> the currency type you
                                <b>want to spend</b>, and the currency type you <b>want to buy</b> (e.g. if you want to spend 1 BTC to buy
                                ETH at the exchange rate shown, you enter “1” and click on “GET STARTED”)
                              </li>
                              <li>
                                <b>Enter your destination address</b> (e.g. if you are buying ETH, you enter your ETH wallet address)
                              </li>
                              <li>
                                You will be prompted to <b>send</b> your coins to a <b>specified address</b>.
                              </li>
                              <li>Once we receive your coins, the processing of your order will start immediately.</li>
                              <li>
                                Once everything is done, you will receive your ETH. Hurray! You just successfully exchanged your
                                cryptocurrency.
                              </li>
                            </ol>
                            <p>
                              Once you have paid for your order, it cannot be reversed. Please ensure that you have put in the right
                              address.
                            </p>
                          </div>
                        }
                      />
                    ) : null}

                    {this.showQuestion(4) ? (
                      <QuestionAnswer
                        id="ques6"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <p>
                            For cryptocurrency only exchange orders , We do not collect or store any private information about you. The
                            process is completely anonymous. For FIAT (USD,GBP,EUR etc) orders we do a strict compliance according to best
                            KYC/AML standards out there.{' '}
                          </p>
                        }
                      />
                    ) : null}

                    {this.showQuestion(5) ? (
                      <QuestionAnswer
                        id="ques9"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>We do not provide wallet hosting service at the moment. The exchange happens between two of your wallets:</p>
                            <ol>
                              <li>
                                The wallet you send the funds from (<b>spending</b> wallet)
                              </li>
                              <li>
                                The wallet you receive funds to (<b>receiving</b> wallet)
                              </li>
                            </ol>
                            <p>Once the transaction has been processed, you are in charge of your wallet balance security.</p>
                          </div>
                        }
                      />
                    ) : null}

                    {this.showQuestion(6) ? (
                      <QuestionAnswer
                        id="ques10"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>Every order has a unique id like this:</p>
                            <img src="/img/faq/faq.png" style={{ margin: '10px 0' }} alt="Order ID example" />
                            <p>
                              Make sure you record your order id. We recommend bookmarking the page, you can always navigate to it later.
                            </p>
                            <p>
                              Once you have sent the cryptocurrency, losing connection, closing the tab or navigating elsewhere will not
                              impact the transaction.
                            </p>
                            <p>If you need help, feel free to contact us.</p>
                          </div>
                        }
                      />
                    ) : null}

                    {this.showQuestion(7) ? (
                      <QuestionAnswer
                        id="ques12"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>
                              There's a 15-minute window between the moment you open the order and the moment we detect the coins that you
                              sent on the blockchain. During this time interval, we effectively freeze the price for your order.
                            </p>
                            <p>
                              If the 15 minute time window closes, the order is canceled because the price will have expired and will need
                              to be recalculated.
                            </p>
                            <p>If you did not send your funds in time, simply initiate a new order.</p>
                            <p>
                              If you did send your funds, but for some reason they were not detected, contact us through the support chat
                              and we will help you out.
                            </p>
                          </div>
                        }
                      />
                    ) : null}

                    {this.showQuestion(8) ? (
                      <QuestionAnswer
                        id="ques14"
                        openSupportModal={this.openSupportModal}
                        answer={
                          <div>
                            <p>
                              In order to use ValorEx, you need to have your own wallet. The main upside of this feature is that we don’t
                              hold your coins, and thus you retain full control over your assets at all times.
                            </p>
                          </div>
                        }
                      />
                    ) : null}
                  </div>
                )}
              </div>
              <Support show={this.state.showSupportModal} onClose={this.closeSupportModal} subject={this.state.subject} />
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

export default FAQ;
