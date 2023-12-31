import React from 'react';
import { Container, Col, Card, Image } from 'react-bootstrap';
import portraitImage from '../assets/images/portrait.jpg';

export default function Bio() {
    return (
        <Container id="about-me" className="d-flex justify-content-center soft-blue-bg">
            <Col xs={12} sm={8} md={6} lg={4} className="d-flex align-items-center">
                <Card className="text-center light-brown-bg" style={{ maxWidth: '400px' }}>
                    <Card.Header as="h2" className='soft-grey-bg light-brown'>About Me</Card.Header>
                    <Card.Body>
                        <Image src={portraitImage} roundedCircle fluid className="portrait-max-size img-fluid mb-3 mx-auto d-block" style={{ maxWidth: '200px', height: 'auto' }} />
                        <Card.Text className='fs-5 dark-brown-bg soft-brown p-2'>
                            I am a Full Stack Developer based in Wildomar, California.
                            I am proficient with MERN stack applications and readable code bases.
                            My passions are in storytelling and video games. My favorite food is sushi and anything with cheese.
                            I am currently watching Yu Yu Hakusho. Ask me anything!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}
