import React from 'react';
import { add } from '../../utilies/utilies';

import Mobile from '../Mobile/Mobile';
import './Laptop.css';

const Laptop = () => {
    const num1 = 10;
    const num2 = 20;
    const result = add(num1, num2);
    return (
        <div className='laptop-container'>
            <h1>This is Laptop Component.</h1>
            <h1>Sum: {result}</h1>
            <Mobile></Mobile>
        </div>
    );
};

export default Laptop;