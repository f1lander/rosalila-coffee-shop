import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'

export default function Payment() {

    return (

        <div className="Payment-method-container">

            <button className="Payment-buy-button paypal"><FontAwesomeIcon icon={faCcPaypal} /> Paypal</button>


            <button className="Payment-buy-button bank"><FontAwesomeIcon icon={faPiggyBank} /> Transferencia</button>


            <button className="Payment-buy-button money"><FontAwesomeIcon icon={faMoneyBill} /> Efectivo</button>

        </div>
    );
}
