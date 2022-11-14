import React from 'react';
import { addToDb, removeDataFromDb } from '../../utilies/fakeDb';
import './Product.css';
const Product = (props) => {
    const { id, name, gender, phone } = props.product;

    // add to cart 
    const addToCart = (id) => {
        addToDb(id);
    }
    // remove from cart 
    const removeFromCart = (id) => {
        removeDataFromDb(id);
    }


    return (
        <div className='product-item'>
            <h2>Name: {name}</h2>
            <h3>Id: {id}</h3>
            <h2>Gender: {gender}</h2>
            <p><strong>Phone:{phone}</strong></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove from cart</button>
        </div >
    );
};

export default Product;