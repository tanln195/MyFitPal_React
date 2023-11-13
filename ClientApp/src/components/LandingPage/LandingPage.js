import React, { Component } from 'react';
import { Container } from 'reactstrap';

import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero';
import ValueProposition from './ValueProposition/ValueProposition';
import Feature from './Feature/Feature';
import Footer from './Footer/Footer';


export class LandingPage extends Component {
    static displayName = LandingPage.name;

    render() {
        const containerStyle = {
            maxWidth: '100%',
            padding: '0px',
        };

        return (
            <React.Fragment>
                <NavBar/>
                <Container style={containerStyle}>
                    <Hero />
                    <ValueProposition />
                    <Feature />
                    <Footer />
                </Container>
            </React.Fragment>
            
        );
    }
}

export default LandingPage;

