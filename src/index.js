import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import contactApp from './REDUX/reducers/contacts';
import reducers from './REDUX/reducers';

const store = createStore(reducers);

// deep copy 함수 - 전역설정 필요
const clone = input => JSON.parse(JSON.stringify(input))

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

