import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    static displayName = Layout.name;



    render() {
        const containerStyle = {
            maxWidth: '100%',
            padding: '0px', 
        };

        return (
            <div>
                {/*<NavMenu />*/}
                <Container tag="main" style={containerStyle}>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
