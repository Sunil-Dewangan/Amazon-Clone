import React from 'react'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();

    return( 
    <div className = "checkout">
        <div className = "checkout_left">
    <img className= "checkout_ad"
    src= "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
    alt = "" />

    {basket?.length === 0 ? (
        <div>
            <h2>Your basket is empty</h2>
        </div>
        ) : (
        <div>
            <h2 className= "checkout_title">Your basket</h2>
            {/*List all the checkout products */}
            {basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
        </div>
    )}
    </div>
    {basket.length > 0 && (
        <div className = "checkout_right">
            <Subtotal />
        </div>
    )}
    </div>
    );
}

export default Checkout;
