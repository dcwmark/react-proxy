/* src/index.js */

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

// react router v4
import { BrowserRouter } from 'react-router-dom'

// react redux
import { Provider } from 'react-redux'

import store from './States/Store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
