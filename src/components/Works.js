import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import movieDatabaseImg from '../assets/images/movie-database.jpg';
import gnkImg from '../assets/images/gnk-homepage.jpg';
import mangoTaxImg from '../assets/images/mango-tax.jpg';

const projects = [
  {
    name: 'Movie Database',
    image: movieDatabaseImg,
    deployedLink: 'https://christinahoang32.github.io/debug-thugs/',
    githubLink: 'https://github.com/christinahoang32/debug-thugs',
    href: 'movie-db'
  },
  {
    name: 'Goodnight King',
    image: gnkImg,
    deployedLink: 'https://fathomless-taiga-84501-b7e9635047d5.herokuapp.com/',
    githubLink: 'https://github.com/renzosj/goodnight-king',
    href: 'gnk'
  },
  {
    name: 'Mango Tax',
    image: mangoTaxImg,
    deployedLink: 'https://mango.tax/',
    githubLink: '', //it's private
    href: 'mango-tax'
  }
];

export default function Works({ activeProject }) {

  const renderProject = project => (
    <Card id={project.href} className="m-2 soft-blue-bg">
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Button variant="primary" href={project.deployedLink} target="_blank" className="me-2">View App</Button>
        <Button variant="secondary" href={project.githubLink} target="_blank">GitHub</Button>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="soft-grey-bg">
      <Row className="justify-content-center">
        <Col xs={12}>
          {activeProject !== null ? renderProject(projects[activeProject]) : <p className='lead light-brown text-center fs-5'>Select a project in navigation menu</p>}
        </Col>
      </Row>
    </Container>
  );
}
