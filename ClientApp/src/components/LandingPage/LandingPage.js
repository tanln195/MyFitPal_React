import React, { Component } from 'react';

import Hero from './Hero/Hero';
import ValueProposition from './ValueProposition/ValueProposition';
import Feature from './Feature/Feature';
import Footer from './Footer/Footer';

export class LandingPage extends Component {
    static displayName = LandingPage.name;

    render() {
        return (
            <React.Fragment>
                <Hero />
                <ValueProposition />
                <Feature />
                <Footer />
            </React.Fragment>
        );
    }
}

export default LandingPage;

