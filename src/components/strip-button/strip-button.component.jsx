import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HkqXHKNl9YC6reOxvcGg1SLiDIS6cWyYBjmT77ueB6wBIbrfls8T1mghKm5GuezuyGT9bQsB6MEV3bEIdtpLMa900HRXJSvkz';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Thanh Toán"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            name={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;