import React from "react";
import GooglePayButton from "@google-pay/button-react";

const GooglePayComponent = () => {
    return (
        <div>
            <h2>Pay with Google Pay</h2>
            <GooglePayButton
                environment="TEST" // Change to "PRODUCTION" when live
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["VISA", "MASTERCARD"],
                            },
                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "example", // Use your payment provider
                                    stripe: {
                                        publishableKey: "your-stripe-publishable-key",
                                        version: "2020-08-27",
                                    },
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: "your-merchant-id", // Required for PRODUCTION
                        merchantName: "Your Business Name",
                    },
                    transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: "10.00", // Amount to be paid
                        currencyCode: "INR",
                        countryCode: "IN",
                    },
                }}
                onLoadPaymentData={(paymentRequest) => {
                    console.log("Success:", paymentRequest);
                    // Handle the response and send data to backend
                }}
                onPaymentAuthorized={(paymentData) => {
                    console.log("Payment Authorized:", paymentData);
                    return { transactionState: "SUCCESS" };
                }}
            />
        </div>
    );
};

export default GooglePayComponent;
