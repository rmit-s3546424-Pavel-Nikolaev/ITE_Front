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
                    <Link to="/home" className="nav-item">Home</Link>
                    <Link to="/upload" className="nav-item">Uploader</Link>
                    <Link to="/login" className="nav-item nav-right">Login</Link>
                </div>
            </nav>
        )
    }
}