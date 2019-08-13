import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'

export default function Payment(typePayment) {

    let paymentMethod;
    switch (typePayment) {
        case 'paypal':
            paymentMethod = <PayPalButton
                amount="0.01"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    return fetch("/.netlify/functions/paypal-transaction", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID
                        })
                    });
                }}
            />
            break;

        case 'bank':
            paymentMethod = <PayPalButton
                amount="0.01"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    return fetch("/.netlify/functions/paypal-transaction", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID
                        })
                    });
                }}
            />
            break;

        default:
            paymentMethod = <PayPalButton
                amount="0.01"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    return fetch("/.netlify/functions/paypal-transaction", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID
                        })
                    });
                }}
            />
            break;
    }
    return (

        <div className="Payment-method-container">

            {paymetMethod}

        </div>
    );
}


