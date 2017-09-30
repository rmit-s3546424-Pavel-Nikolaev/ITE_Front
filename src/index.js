import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './js/app';
import Navbar from './js/navbar.jsx';
import Home from './js/home';
import Login from './js/login';
import Uploader from './js/uploader';

import registerServiceWorker from './js/utils/registerServiceWorker.js';
import './css/index.css';

ReactDOM.render((
    <BrowserRouter >
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route path='/upload' component={Uploader}/>
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
