import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

    const [counter, setCounter] = useState(value);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={increment}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
