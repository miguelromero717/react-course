import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, subtitle }) => {
    const sayHi = title;
    const object = {
        name: 'Miguel',
        age: 30
    };

    return (
        <>
            <h1>{sayHi}</h1>
            <pre>{JSON.stringify(object, null, 3)}</pre>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'My first App'
}

export default FirstApp;