import React, { Component } from 'react';
import Hero from './Hero/Hero';
import ValueProposition from './ValueProposition/ValueProposition';
//import FitnessDetails from './components/FitnessDetails/FitnessDetails';
import Feature from './Feature/Feature';
//import Package from './components/Package/Package';
//import Contact from './components/Contact/Contact';
//import Footer from './components/Footer';

export class LandingPage extends Component {
    static displayName = LandingPage.name;

    render() {
        return (
            <React.Fragment>
                <Hero />
                <ValueProposition />
                {/*<FitnessDetails />*/}
                <Feature />
                {/*<Package />*/}
                {/*<Contact />*/}
                {/*<Footer />*/}
            </React.Fragment>
        );
    }
}

export default LandingPage;

