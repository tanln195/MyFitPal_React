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
import { Link } from 'react-router-dom';
import './NavMenu.css';

function NavMenu() {
    const [collapsed, setCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                <NavbarBrand tag={Link} to="/"><img src="/images/logo.png" alt="MyFitPal Logo" id="logo-name" /></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-grow">                        
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Set Goals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Track Workouts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Log Nutrition</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Nutrition Analysis</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Personalized Plans</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Progress Tracker</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Smart Watch</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/login">Sign In</NavLink>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>*/}
                        {/*        <DropdownToggle nav caret>*/}
                        {/*            Dropdown*/}
                        {/*        </DropdownToggle>*/}
                        {/*        <DropdownMenu>*/}
                        {/*            <DropdownItem header>Header</DropdownItem>*/}
                        {/*            <DropdownItem disabled>Action</DropdownItem>*/}
                        {/*            <DropdownItem>Another Action</DropdownItem>*/}
                        {/*            <DropdownItem divider />*/}
                        {/*            <DropdownItem>Sign Out</DropdownItem>*/}
                        {/*        </DropdownMenu>*/}
                        {/*    </Dropdown>*/}
                        {/*</NavItem>*/}
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
}

export { NavMenu } ;
