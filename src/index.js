import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import App from './js/app.js';
import Navbar from './js/navbar.jsx';
import Home from './js/home.jsx';
import registerServiceWorker from './js/utils/registerServiceWorker.js';
import './css/main.css';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/'>
                <Redirect to="/Home" push/>
            </Route>
            <Route exact path='/Home' component={Home}/>
            <Route exact path='/Upload' component={App}/>
        </Switch>
    </main>
);

const APP = () => (
    <div>
        <Navbar />
        <Main />
    </div>
);

ReactDOM.render((
    <BrowserRouter >
        <APP />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
