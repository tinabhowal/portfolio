import React from 'react';
import Navbar from './navbar';
import './contact.css';
import {  Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import github from './images/github.png';
import medium from './images/medium.png';
import linkedin from './images/linkedin.png';


const Contact = () => {
  return (
    <div className='contactcontainer'>
      <Navbar></Navbar>

      <div className='body'>
      <div className='formsection'>
      <Row>
        <Col className='contactmeform'>
          {/* <Form action='' method='post'>
            <h2>Send me a message</h2>
    
            <Form.Group controlId='fullname'>
              <Form.Label>Full name</Form.Label>
              <Form.Control type='text' name='fullname' required />
            </Form.Group>
    
            <Form.Group controlId='phone'>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type='tel' name='phone' pattern='[0-9]{3}[0-9]{4}[0-9]{4}'  required></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' name='email' placeholder="E.g marie.curie@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </Form.Group>
    
            <Form.Group controlId='message'>
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" name='message' placeholder="Type your message here" rows={10} />
            </Form.Group> 
            
            <div className='text-center'>
            <Button className='formbutton' variant='secondary' type='reset'>
              Reset
            </Button>
    
            <Button className='formbutton' variant='primary' type='submit'>
              Submit
            </Button>
            </div>
            <h4 className='or'>Or</h4> */}
            <Link className='link' to='tinabhowal88@gmail.com'><h2>Contact me via email</h2></Link>
          {/* </Form> */}
        </Col>
      </Row>
      </div>

      <div className='findmesection'>
      <Row>
        <Col className='findme'>
          <h2>You may also find me on</h2>
          <div class="social-media">
            <a href="https://github.com/tinabhowal" target="blank">
              <img src={github} alt="github logo" width="30" height="30" />
            </a>

            <a href="https://www.linkedin.com/in/tina-bhowal-17a0441b3" target="blank">
              <img src={linkedin} alt="linkedin logo" width="30" height="30" />
            </a> 

            <a href="https://medium.com/@tinabhowal88" target="blank">
              <img src={medium} alt="linkedin logo" width="30" height="30" />
            </a> 

          </div>  
        </Col>
      </Row>
      </div>

      </div>
    </div>
  );
}

export default Contact;
