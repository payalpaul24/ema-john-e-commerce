import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <h5> by: {seller}</h5>
                <h3>${price}</h3>
                <h6>only {stock} left in stock - order soon</h6>
                <button onClick={()=> props.handleAddProducts(props.product)} className="main-button"><FontAwesomeIcon icon={faCartPlus} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;