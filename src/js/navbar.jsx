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
        if (this.state.isAuth) {
            link = (<Link to="/upload" id="nav-signup" className="nav-item nav-right button">Upload</Link>);
        }
        else {
            link = (
                <div className="nav-item nav-right no-padding">
                    <Link to="/login" className="nav-item nav-right nav-item-norm">Log in</Link>
                    {/* Below will be a sign up link, however during development it links to the upload page */}
                    <Link to="/upload" id="nav-signup" className="nav-item nav-right button">Sign Up / Upload</Link>
                </div>
            );
        }
        return (
            <nav id="nav-site">
                <div className="nav-container">
                    <Link to="/home" id="nav-logo"></Link>
                    <Link to="/home" id="nav-brand" className="nav-item">Tabby</Link>
                    
                    {link}
                </div>
            </nav>
        )
    }
}