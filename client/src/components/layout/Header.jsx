import React, { Component } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";

class Header extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Navbar className="navbar-dark" expand="sm">
                    <h1 className="navbar-brand text-light">willebergh.io</h1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-light" href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;