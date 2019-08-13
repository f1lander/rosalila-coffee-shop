import React from 'react';
import './CartItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const removeIcon = <FontAwesomeIcon icon={faMinus} />
export default function CartItem({ onRemoveFromCartClick, title, cost, quantity }) {

  return (
    <div className="CartItem">
      <div>{title}</div>
      <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
        <button className="CartItem-remove-button" onClick={onRemoveFromCartClick}>
          {removeIcon}
        </button>
      </div>
    </div>
  );
}
