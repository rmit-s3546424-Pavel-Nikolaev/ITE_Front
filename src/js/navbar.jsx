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
            myFiles = (<Link to="/library" className="nav-item">My Files</Link>);
            link = (<Link to="/upload" id="nav-signup" className="nav-item nav-right">Upload</Link>);
        }
        else {
            link = (
                <Link to="/login"  className="nav-item nav-right login">Log in</Link>
            );
        }
        return (
            <nav id="nav-site">
                <div className="nav-container">
                    <Link to="/home" id="nav-logo"></Link>
                    <Link to="/home" id="nav-brand" className="nav-item">Tabby</Link>
                    {link}
                  {myFiles}
                </div>
            </nav>
        )
    }
}