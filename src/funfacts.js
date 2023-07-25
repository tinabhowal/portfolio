import React, { useState } from 'react';
import './funfacts.css';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import StudyMaterial from './studyMaterial';
import Reasons from './reasons';
import Jokes from './jokes';
import Navbars from './navbar';
import diversity from './images/doodle8.png';
import sloth from './images/doodle9.png';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';





const FunFacts = () => {
//   const [showStydyMaterialModal, setShowStydyMaterialModal] = useState(false);
  const [showReasonsModal, setShowReasonsModal] = useState(false);
//   const [showFunModal, setShowFunModal] = useState(false);

//   const handleCloseStydyMaterialModal = () => setShowStydyMaterialModal(false);
//   const handleShowStydyMaterialModal = () => setShowStydyMaterialModal(true);

  const handleCloseReasonsModal = () => setShowReasonsModal(false);
  const handleShowReasonsModal = () => setShowReasonsModal(true);

//   const handleCloseFunModal = () => setShowFunModal(false);
//   const handleShowFunModal = () => setShowFunModal(true);

  
  const handleJokesClick = () => {
    window.location.href = '/jokes';
  };

  const handleStudyMaterialClick = () => {
    window.location.href = '/studyMaterial';
  };

  return (
    <div className='funfactsbody'>
      <Navbars></Navbars>

      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
      {/* <Col className="mb-3">
      <Card className='modalcard'>
        <Card.Img variant="top" src="experience-image.jpg" />
        <Card.Body>
          <Card.Title>Study Material</Card.Title>
          <Button variant="primary" onClick={handleStudyMaterialClick}>
            Open Study Material
          </Button>
        </Card.Body>
      </Card>
      </Col> */}
   
      <Col className="mb-3 funfactscol">
      <Card className='modalcard'>
        <Card.Img variant="top" src={sloth} style={{width:'300px', height:'400px'}} />
        <Card.Body>
          <Card.Title>Reasons why I may not be hired</Card.Title>
          <Button variant="primary" onClick={handleShowReasonsModal}>
            Open Reasons Modal
          </Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className="mb-3 funfactscol">
      <Card className='modalcard'>
        <Card.Img variant="top" src={diversity} style={{width:'100%', height:'400px'}} />
        <Card.Body>
          <Card.Title>Jokes</Card.Title>
          <Button variant="primary" onClick={handleJokesClick}> 
            Open jokes
            
          </Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
     
      
      {/* <Modal show={showStydyMaterialModal} onHide={handleCloseStydyMaterialModal}>
        <Modal.Header closeButton>
          <Modal.Title>Study Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudyMaterial />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseStydyMaterialModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal show={showReasonsModal} onHide={handleCloseReasonsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reasons why I may not be hired:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Reasons />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReasonsModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showFunModal} onHide={handleCloseFunModal}>
        <Modal.Header closeButton>
          <Modal.Title>Doodles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Jokes />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFunModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default FunFacts;

