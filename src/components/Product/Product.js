import React from 'react';
import { addToDb } from '../../utilies/fakeDb';
import './Product.css';
const Product = (props) => {
    const { id, name, gender, phone } = props.product;

    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product-item'>
            <h2>Name: {name}</h2>
            <h3>Id: {id}</h3>
            <h2>Gender: {gender}</h2>
            <p><strong>Phone:{phone}</strong></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div >
    );
};

export default Product;