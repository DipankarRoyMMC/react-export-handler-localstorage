import React from 'react';
import { multiply } from '../../utilies/utilies';
import './Mobile.css';
const Mobile = () => {
    const fistNumber = 30;
    const secondNumber = 40;
    const result = multiply(fistNumber, secondNumber);
    return (
        <div className='mobile-container'>
            <h2>This is Mobile Component.</h2>
            <h1>Multiply: {result}</h1>
        </div>
    );
};
export default Mobile;