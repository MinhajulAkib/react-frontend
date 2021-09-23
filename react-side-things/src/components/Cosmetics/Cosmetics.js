import React from 'react';
import { add, multiply, substract } from '../../storage/Storage';

const Cosmetics = () => {
        const first =55;
        const second =85;
        const sum = add(first, second);
        const multi = multiply(first, second);
        const subs = substract(first, second);
    return (
        <div>
            
        </div>
    );
};

export default Cosmetics;