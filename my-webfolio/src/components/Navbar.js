import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(expanded ? false : "expanded");
    };

    const collapseNavbar = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">Look upon my works, ye mighty</Navbar.Brand>
                <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me" onClick={collapseNavbar}>About Me</Nav.Link>
                        <Nav.Link href="#work-1" onClick={collapseNavbar}>Movie Database</Nav.Link>
                        <Nav.Link href="#work-2" onClick={collapseNavbar}>Goodnight, King</Nav.Link>
                        <Nav.Link href="#work-3" onClick={collapseNavbar}>Mango Tax</Nav.Link>
                        {/* refactor links later to use loop (map function) */}
                        <Nav.Link href="#contact" onClick={collapseNavbar}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}