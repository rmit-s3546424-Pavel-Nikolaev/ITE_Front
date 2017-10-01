import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isAuth: false};
        this.listen = this.listen.bind(this);
    }

    componentDidMount() {
        this.listen();
    }

    listen() {
        // display different navbar when user has logged in
        setInterval(() => {
            let token = localStorage.getItem('session');
            if (token == null) {
                this.setState({
                    isAuth: false
                });
            }
            else {
                this.setState({
                    isAuth: true
                });
            }
        }, 50);
    }


    render() {
        let link = "";
        let myFiles = "";
        if (this.state.isAuth) {
            link = (<Link to="/upload" className="nav-item">Upload</Link>);
            myFiles = (<Link to="/my-files" className="nav-item">My Files</Link>);
        }
        else {
            link = (<Link to="/login" className="nav-item">Login</Link>);
        }
        return (
            <div className="nav-container">
                <Link to="/home" className="nav-item">Home</Link>
                <a className="nav-item">About</a>
                {link}
                {myFiles}
            </div>
        )
    }
}