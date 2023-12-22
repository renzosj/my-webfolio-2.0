import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="text-center py-1 soft-brown-bg">
            <Container>
                <Row className="justify-content-center mt-3 mb-1">
                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/renzo-san-juan/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://github.com/renzosj" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="mailto:renzosanjuan@proton.me">
                            <FaEnvelope size={30} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='h4'>Made in React with ☕ and 💖</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
