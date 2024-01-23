import React, { useState } from 'react';

/**
 * How often does a component render?
 * 
 * Components only re-render if STATE changes.
 * We need handle values that might change the REACT way.
 * Because we want React to... well... REACT to that change.
 * 
 * We NEVER update state directly. 
 * ONLY update state using the setter function (that useState gave us.)
 */

const Timer = () => {
    // let seconds = 0;
    const secondsStateArray = useState(0); // Whatever we pass in here will be the INITIAL/DEFAULT value.
    const seconds = secondsStateArray[0]; // First item in array is the CURRENT state value.
    const setSeconds = secondsStateArray[1]; // Second item in array is a FUNCTION for SETTING a new state value.

    setInterval(() => {
        // seconds++;
        const newSeconds = seconds + 1;
        setSeconds(newSeconds); // check if seconds === newSeconds... if NOT, re-render!
        console.log('seconds:', seconds);
    }, 1000);

    return (
        <p>
            {seconds} seconds have passed.
        </p>
    );
};

export default Timer;

// BAD NEWS BEARS:
// const Timer = () => {
//     let seconds = 0;

//     setInterval(() => {
//         seconds++;
//         console.log('seconds:', seconds);
//     }, 1000);

//     return (
//         <p>
//             {seconds} seconds have passed.
//         </p>
//     );
// };

// export default Timer;