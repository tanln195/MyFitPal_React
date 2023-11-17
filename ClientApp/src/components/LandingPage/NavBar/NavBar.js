import React/*, { useState }*/ from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {

    return (

        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow navbar" container light>
                <NavbarBrand tag={Link} to="/"><img src="/images/logo.png" alt="MyFitPal Logo" id="logo-name" /></NavbarBrand>

                <div id="btn-sign-up-wrapper">
                    <NavLink tag={Link} className="text-white btn-sign-up" to="/sign-up">Sign Up Now</NavLink>
                </div>
            </Navbar>
        </header>
    );
}

export default NavBar ;
