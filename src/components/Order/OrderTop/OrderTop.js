import React, { Component } from 'react';
import axios from 'axios';
import { I18n } from 'react-i18next';
import Bookmark from './Bookmark/Bookmark';
import styles from './OrderTop.scss';
import config from 'Config';

class OrderTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBookmarkModal: false,
    };
    this.flagOrder = this.flagOrder.bind(this);
  }

  flagOrder() {
    axios.patch(
      `${config.API_BASE_URL}/orders/${this.props.order.unique_reference}`,
      {
        flagged: true,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
  }

  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div>
            <div className={`col-xs-12 ${styles.container}`}>
              <div className={styles.left}>
                <h3 className={styles.ref}>
                  {t('order.reference')}: <b>{this.props.order.unique_reference}</b>
                </h3>
                <button className={styles.flagOrder} onClick={this.flagOrder}>
                  Flag Order
                </button>
              </div>

              <button
                type="button"
                className={`${styles.bookmark} btn btn-default btn-simple`}
                onClick={() => this.setState({ showBookmarkModal: true })}
              >
                {t('bookmark.0')}
              </button>
            </div>

            <Bookmark show={this.state.showBookmarkModal} onClose={() => this.setState({ showBookmarkModal: false })} />
          </div>
        )}
      </I18n>
    );
  }
}

export default OrderTop;
