import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const productList = fakeData.slice(0,10);
    const [products, setproducts] = useState(productList);
    const [cart, setcart] = useState([]);
    console.log(fakeData);
    const handleAddProducts = (product) =>{
        console.log('clicked',product);
        const newCart = [...cart, product];
        setcart(newCart);
    }
    return (
        <div className="shop-container">
           <div className="product-container">
                {
                    products.map(product => <Product handleAddProducts={handleAddProducts} product={product}> </Product> )
                }
           </div>
           <div className="cart-container">
               <h3>Order Summary </h3>
               <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Shop;