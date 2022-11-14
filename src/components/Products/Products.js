import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProduct] = useState([]);
    // https://products.free.beeceptor.com/ 
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return (
        <div>
            <h1>All Products Here.</h1>
            <div className="products">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>


        </div>
    );
};

export default Products;