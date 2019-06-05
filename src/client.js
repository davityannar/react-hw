import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from 'react-router-dom'


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import App from "./App";

import reducers from './reducers/rootReducer';

export const store = createStore(reducers, applyMiddleware(thunk))

if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Provider store={store}>
            <ErrorBoundary> 
            <Router>               
                <App/>
            </Router>                               
            </ErrorBoundary>
        </Provider>,
        document.getElementById("root"));

    }