import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // document.querySelector('button').addEventListener('click');
    // document.querySelector('button').onClick = function() {};

    const handleClick = () => {
        setCount(count + 1);
        console.log('Counter clicked!');
    };

    return (
        <button onClick={handleClick}>
            This button has been clicked {count} times!
        </button>
    );
};

export default Counter;
