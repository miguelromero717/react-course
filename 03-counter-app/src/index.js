import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import FirstApp from './FirstApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<FirstApp title='Hello World' />, divRoot);

