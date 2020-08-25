import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalAmount = cart.reduce((total, product) => total + product.price , 0);
    
    let shipping;
    if(totalAmount > 30){
        shipping = 0;
    }else if(totalAmount > 15){
        shipping = 4.2;
    }else if(totalAmount > 0){
        shipping = 8.4;
    }
    const tax = (totalAmount /10).toFixed(2);
    const grandTotal =(totalAmount + shipping + Number(tax)).toFixed(2);
        const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }
    return (
        <div className="cart">
            <h4>Items Ordered: {cart.length}</h4>
            <h4>Items: {formatNumber(totalAmount)}</h4>
            <p>Shipping: {shipping} </p>
            <p>Tax + VAT : {tax} </p>
            <h4>Ordered Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;