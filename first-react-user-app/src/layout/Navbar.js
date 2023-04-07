import React from 'react';
import {PropTypes} from "prop-types";
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {

    return (
        <nav className="nav navbar-nav navbar-expand-lg navbar-dark bg-dark p-2">
            <a href="/" className="navbar-brand ml-3">{title}</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/github" className="nav-link">Contribute</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">Add User</Link>
                </li>
                
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "User App"
}
export default Navbar;
