import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp />, divRoot);
// ReactDOM.render(<FirstApp title="Hola soy Miguel"/>, divRoot);
