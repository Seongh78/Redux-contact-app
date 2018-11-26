import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './REDUX/reducers';

const store = createStore(reducers);


ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));