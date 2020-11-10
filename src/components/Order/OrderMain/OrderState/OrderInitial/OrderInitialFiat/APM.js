import React, { useRef } from 'react';

const APM = ({ order }) => {
  const advcashRef = useRef(null);
  const payeerRef = useRef(null);

  const {
    amount_quote,
    pair: {
      quote: { code },
    },
    unique_reference,
  } = order;

  const handleClick = ({
    target: {
      dataset: { type },
    },
  }) => {
    if (type === 'advcash') advcashRef.current.submit();

    if (type === 'payeer') payeerRef.current.submit();
  };

  return (
    <div>
      <form method="GET" action="https://wallet.advcash.com/sci/" class="automatic-checkout" ref={advcashRef}>
        <input type="hidden" name="ac_account_email" value="advcash@nexchange.co.uk" />
        <input type="hidden" name="ac_sci_name" value="{{ adv_cash_sci_name }}" />
        <input type="hidden" name="ac_amount" value={amount_quote} />
        <input type="hidden" name="ac_currency" value={code} />
        <input type="hidden" name="ac_order_id" value={unique_reference} />
        <input type="hidden" name="ac_sign" value="{{ adv_cash_sign }}" />
        {/* <input type="image" class="payment-icon" name="submit" alt="Advanced Cash Payment" src="/static/icons/small/adv_cash.png" /> */}
      </form>

      <form method="post" action="https://payeer.com/merchant/" class="automatic-checkout" ref={payeerRef}>
        <input type="hidden" name="m_shop" value="P1023540800" />
        <input type="hidden" name="m_orderid" value={unique_reference} />
        <input type="hidden" name="m_amount" value={amount_quote} />
        <input type="hidden" name="m_curr" value={code} />
        <input type="hidden" name="m_desc" value="{{ payeer_desc }}" />
        <input type="hidden" name="m_sign" value="{{ payeer_sign }}" />
        {/* <input type="image" class="payment-icon" name="submit" alt="Payeer Payment" src="/static/icons/small/payeer.png" /> */}
      </form>

      <h4>Alternative Payment Methods:</h4>
      <a className="btn btn-advcash btn-lg" data-type="advcash" onClick={handleClick}>
        Advcash
      </a>
      <a className="btn btn-payeer btn-lg" data-type="payeer" onClick={handleClick}>
        Payeer
      </a>
    </div>
  );
};

export default APM;
