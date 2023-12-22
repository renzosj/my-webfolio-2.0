import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavigationBar({ setActiveProject }) {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(expanded ? false : "expanded");
    };

    const collapseNavbar = () => {
        setExpanded(false);
    };

    const handleNavLinkClick = (projectIndex) => {
        setActiveProject(projectIndex);
        collapseNavbar();
    };

    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">Look upon my works, ye mighty</Navbar.Brand>
                <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me" onClick={() => handleNavLinkClick(null)}>About Me</Nav.Link>
                        <Nav.Link href="#movie-database" onClick={() => handleNavLinkClick(0)}>Movie Database</Nav.Link>
                        <Nav.Link href="#gnk" onClick={() => handleNavLinkClick(1)}>Goodnight, King</Nav.Link>
                        <Nav.Link href="#mango-tax" onClick={() => handleNavLinkClick(2)}>Mango Tax</Nav.Link>
                        {/* refactor links later to use loop (map function) */}
                        <Nav.Link href="#contact" onClick={() => handleNavLinkClick(null)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}