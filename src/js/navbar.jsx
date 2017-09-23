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
            <div className="navbar-container" id="nav-con">
                <div className="navbar">
                    <div className="navbar-left">
                        <ul className="nav-list">
                            <li><Link to="/Home" className="navLinks">Home</Link></li>
                             <li><Link to="/Upload" className="navLinks">Uploader</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul className="nav-list-r">
                            <li><a className="navLinks">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}