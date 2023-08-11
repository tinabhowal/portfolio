import React from 'react';
import Navbar from './navbar';
import './contact.css';
import {  Row, Col } from 'react-bootstrap';
import github from './images/github.png';
import medium from './images/medium.png';
import linkedin from './images/linkedin.png';



const Contact = () => {
  
  return (
    <div className='contactcontainer'>
      <Navbar></Navbar>

      <div className='contactsbody'>
      <div className='formsection'>


      <div className='personalDetails'>
      <Row>
        <Col className='personalDetailsCol'>
          {/* <h1>Tina Bhawal</h1> */}
          <p><b>Location:</b>  <i> Berlin</i></p>
          {/* <p><b><i>Ph: +176-7483-9525</i></b> </p> */}
          <p><b>Email: </b><i><a className='link' href='mailto:tinabhawal5@gmail.com'> Contact me via email</a></i></p>
          <p><b>Resume: </b><i><a className='link' href='https://drive.google.com/file/d/1J5UBC-Jk2D4dyDL2GQAhugaT5jGK01ub/view?usp=sharing' target='blank'>Download Resume</a></i></p>
        </Col>
      </Row>
      </div>

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
            {/* <Link className='link' to='tinabhowal88@gmail.com'><h2>Contact me via email</h2></Link> */}
          {/* </Form> */}
          
        </Col>
      </Row>
      </div>

      <div className='findmesection'>
      <Row className='findmerow'>
        <Col className='findme'>
          <h6>Find me on</h6>
          <div class="social-media">
            <a href="https://github.com/tinabhowal" target="blank">
              <img src={github} alt="github logo" width="30" height="30" />
            </a>

            <a href="https://www.linkedin.com/in/tina-bhawal-17a0441b3/" target="blank">
              <img src={linkedin} alt="linkedin logo" width="30" height="30" />
            </a> 

            <a href="https://medium.com/@tinabhowal88" target="blank">
              <img src={medium} alt="linkedin logo" width="30" height="30" />
            </a> 

          </div>  
        </Col>
      </Row>
      </div>

      <div className='impressum'>
        <Row>
          <Col>
          <div>
            Created by Tina Bhawal
            <a href="https://drive.google.com/file/d/1-u_is5_RkfZjiMTgRFuyMdniuWyDTdbO/view?usp=sharing" target="blank">Impressum</a>
          </div>
          </Col>
        </Row>
      </div>

      </div>
    </div>
  );
}

export default Contact;
