import React from 'react';
import { Link } from 'react-router-dom';
import OrderLinks from '../OrderLinks/OrderLinks';
import OrderCheckIcon from '../OrderIcons/OrderCheckIcon/OrderCheckIcon';
import styles from '../OrderState.scss';
import { I18n } from 'react-i18next';
import styled from '@emotion/styled';
import Cookies from 'js-cookie';

const OrderSuccess = props => (
  <I18n ns="translations">
    {(t, { lng }) => (
      <div className={styles.container}>
        <OrderCheckIcon />
        <h2 className={styles.title}>{t('order.success1')}</h2>
        {Cookies.get('5usdfree') === 'redeeming' ? (
          <PromoLink>You are eligible for free $5 in BTC. Click here to to redeem.</PromoLink>
        ) : (
          <Link to={`/${lng}`} className={styles['another-order']}>
            {t('order.success2')}
          </Link>
        )}

        <OrderLinks {...props} />
      </div>
    )}
  </I18n>
);

export default OrderSuccess;

const PromoLink = styled.div`
  display: inline-block;
  cursor: pointer;
  color: #2cc5bd;
  font-weight: 500;
  margin: 15px 0 8px 0;
`;
