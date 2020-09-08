import React from 'react';
import styles from './OrderTop.scss';

const OrderTop = props => {
  return (
    <div>
      <div className="col-xs-12">
        <h3 className={styles.ref}>
          Order Reference: <b>{props.order.unique_reference}</b>
        </h3>
      </div>
    </div>
  );
};

export default OrderTop;
