import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {


        // let link = "";
        // if (this.state.isAuth) {
        //     link = (<li><Link to="/Profile" className="navLinks">Profile</Link></li>);
        // }
        // else {
        //     link = (<li><Link to="/login" className="navLinks">Login</Link></li>);
        // }
        return (
            <nav id="nav-site">
                <div className="nav-container">
                    <Link to="/home" id="nav-logo"></Link>
                    <Link to="/home" id="nav-brand" className="nav-item">Tabby</Link>
                    
                    <Link to="/login" className="nav-item nav-right nav-item-norm">Log in</Link>
                    {/* Below will be a sign up link, however during development it links to the upload page */}
                    <Link to="/upload" id="nav-signup" className="nav-item nav-right button">Sign Up / Upload</Link>
                </div>
            </nav>
        )
    }
}