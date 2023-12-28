import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function Contact({ showContact }) {
  // const showContactIsTrue = showContact;

  const renderContactForm = () => (
    <Container id="contact" className="p-1 soft-blue-bg">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className='text-center italic fs-1 mt-4'>Contact</h2>
          <Form>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button className='dark-brown-bg p-3 my-2' type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div>
      {showContact ? renderContactForm() : <br id="contact" />}
    </div>

  );
}
