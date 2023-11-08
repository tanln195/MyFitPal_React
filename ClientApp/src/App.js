import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Login from './components/Login/Login'; // Import the Login component
import LandingPage from './components/LandingPage/LandingPage'; // Import the Home component

export default class App extends Component {
    static displayName = App.name;

    constructor() {
        super();
        this.state = {
            isAuthenticated: false, // Add isAuthenticated state
        };
    }

    // A function to set isAuthenticated to true
    handleLogin = () => {
        this.setState({ isAuthenticated: true });
    };

    render() {
        return (
            <Layout>
                <Routes>
                    {/* Add a route for the login page */}
                    <Route
                        path="/login"
                        element={
                            // Pass handleLogin function to the Login component
                            <Login handleLogin={this.handleLogin} />
                        }
                    />
                    {/* Add a route for the home page */}
                    <Route
                        path="/home"
                        element={<LandingPage />}
                    /*element={
                        // Use Navigate to redirect to login if not authenticated
                        this.state.isAuthenticated ? <Home /> : <Navigate to="/login" />
                    }*/
                    />
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </Layout>
        );
    }
}
