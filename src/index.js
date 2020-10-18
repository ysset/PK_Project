import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './Utils/serviceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import myReducer from './redux/myReducer'


const middleWares = [thunk];

const store = createStore(myReducer, applyMiddleware(...middleWares))

const app = (
        <Provider store={store}>
            <App/>
        </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();