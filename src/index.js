import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Components
import Navbar from './js/navbar.jsx';
import Home from './js/home';
import Footer from './js/footer';
import Login from './js/login';
import Uploader from './js/uploader';
import {clearMsg} from './js/utils/utilities';

import registerServiceWorker from './js/utils/registerServiceWorker.js';
import './css/index.css';


const errors = document.getElementById("errorDiv");
errors.onclick = () => {
    clearMsg();
};

const msg = document.getElementById("zuccDiv");
msg.onclick = () => {
    clearMsg(false, true);
};


ReactDOM.render((
    <BrowserRouter >
        <div id="react-container">
            <Navbar />
            <div id="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/upload' component={Uploader}/>
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
