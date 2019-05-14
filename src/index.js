import React from 'react';
import ReactDom from 'react-dom';
// import Hello from './components/Hello'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './redux/store'
import Nav from './components/Nav'
import getRouter from './router'
import '../mock/mock.js'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Nav/>
            {getRouter()}
        </Router>
    </Provider>,
    document.getElementById('app')
)