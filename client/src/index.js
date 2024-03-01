import React from 'react';
import  { createRoot }  from 'react-dom/client';  //??

import { Provider }  from 'react-redux'; //keep track of 'store' that is global state
//import { applyMiddleware, compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import {thunk} from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';   // component style


//start store using redux and can start using all routes
//const store = configureStore(reducers, applyMiddleware().concat(thunk));
const store = configureStore({reducer: reducers});
// ReactDOM.render to render our APP.JS main component
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store = {store} >
        <App />
    </Provider>
);
