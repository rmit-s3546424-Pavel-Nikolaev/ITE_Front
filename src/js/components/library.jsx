import React from 'react';
import {Redirect} from 'react-router-dom';
import SideBar from './library/sidebar';
import MusicFile from './library/music-file';
import {clearMsg, showMsg} from './../utils/utilities';

export default class Library extends React.Component {

    constructor(props){
        super(props);
        this.listen = this.listen.bind(this);

        this.credentials = localStorage.getItem('session');
        const isAuthenticated = this.credentials ? true : false;
        this.state = {isAuth: isAuthenticated}
    }


    componentDidMount() {
        this.listen();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    // will automatically take user to login if
    // sessions is expired/deleted
    listen() {
        this.interval = setInterval(() => {
            let token = localStorage.getItem('session');
            if (token == null) {
                const errors = document.getElementById("errorDiv");
                clearMsg();
                errors.insertAdjacentHTML("beforeend", "<p class='errorMsg'>Please login to browse tabs</p>");
                showMsg();
                this.setState({
                    isAuth: false
                });
                clearInterval(this.interval);
            }
            else {
                this.setState({
                    isAuth: true
                });
            }
        }, 50);
    }


    render() {
        if (!this.state.isAuth) {
            return <Redirect to="/login"/>;
        }
        return (
            <div id="library">
                <SideBar />
                <MusicFile />
            </div>
        )
    }
}