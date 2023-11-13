import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    //const [collapsed, setCollapsed] = useState(true);
    //const [dropdownOpen, setDropdownOpen] = useState(false);

    //const toggleNavbar = () => {
    //    setCollapsed(!collapsed);
    //}

    //const toggle = () => {
    //    setDropdownOpen(!dropdownOpen);
    //}


    return (

        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow navbar" container light>
                <NavbarBrand tag={Link} to="/"><img src="/images/logo.png" alt="MyFitPal Logo" id="logo-name" /></NavbarBrand>

                <div id="btn-sign-up-wrapper">
                    <NavLink tag={Link} className="text-white btn-sign-up" to="/login">Sign Up Now</NavLink>
                </div>
            </Navbar>
        </header>
    );
}

export default NavBar ;
