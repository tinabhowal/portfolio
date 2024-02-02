import React from 'react';
import { useState } from 'react';
import Navbar from './navbar';
import './projects.css';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import reactImage from './images/myflix client react.png';
import oldPokemon from './images/oldPoke.png';
import angular from './images/angular.png';
import meetApp from './images/meetapp.png';
import chatApp1 from './images/chatapp screenshots.jpeg';
import firstPortfolio from './images/firstportfolio.png';
import myFlixApi from './images/myFlixApi.png';
import newPoke from './images/newPokemon.png';
import Figma5 from './images/Figma5.png';
import portfolio from './images/newprof2.png';


const Projects = () => {

  const [expandedProject, setExpandedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    
    {
      id: 1,
      title: 'myFlix-client-React',
      image: reactImage,
      description:'Using React, the client-side for an app called myFlix is built based on its existing server-side code (REST API and database).',
      demoLink: 'https://figma--mymoviesflix.netlify.app/login',
      githubLink: 'https://github.com/tinabhowal/myFlix-client',
      
      
    },

    {
      id: 2,
      title: 'NewPokemon',
      image: newPoke,
      description:'The same Pokemon web application with swiper.js',
      demoLink: '',
      githubLink: 'https://github.com/tinabhowal/newCartoon/tree/main',
      
    },

    {
      id: 3,
      title: 'myFlix-api',
      image: myFlixApi,
      description:'The server-side component of a “movies” web application. The web application provides users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.',
      // demoLink: 'https://myflix-gqp8.onrender.com',
      githubLink: 'https://github.com/tinabhowal/movie_api',
      
    },

    {
      id: 4,
      title: 'My React Portfolio',
      image: portfolio,
      description: 'My first practice portfolio, which was built using HTML and CSS, has been rebuilt using React js.',
      githubLink: 'https://github.com/tinabhowal/portfolio',
      caseStudy: 'https://drive.google.com/file/d/1BBtT_q4DEGLv1ZpKviQ-gQtI1GbkfNf1/view?usp=sharing'
      
      
    },

    {
      id: 5,
      title: 'myFlix-client-Angular',
      image: angular,
      description:'Using Angular, the client-side for an app called myFlix is built based on its existing server-side code (REST API and database).',
      demoLink: 'https://my-flix-angular-client-qh47v87k4-tinabhowal.vercel.app/welcome',
      githubLink: 'https://github.com/tinabhowal/myFlix-Angular-client',
     
    },

    {
      id: 6,
      title: 'MeetApp',
      image: meetApp,
      description:'A serverless, progressive web application (PWA) is built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
      demoLink: 'https://tinabhowal.github.io/meet/',
      githubLink: 'https://github.com/tinabhowal/meet',
      
    },

    {
      id: 7,
      title: 'ChatApp',
      image: chatApp1,
      description:'A chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images, videos and their location.',
      demoLink: 'https://drive.google.com/file/d/1-XRlqpVIKAqozukG8f5NgiyH276M0UW0/view?usp=sharing',
      githubLink: 'https://github.com/tinabhowal/Chat-App',
      
    },

    {
      id: 8,
      title: 'My first practice portfolio',
      image: firstPortfolio,
      description:'A responsive website using HTML and CSS that showcases my first practice portfolio.',
      demoLink: 'https://tinabhowal.github.io/tinaprofile/careerfoundry/',
      githubLink: 'https://github.com/tinabhowal/tinaprofile',
      
    },

    {
      id: 9,
      title: 'My Figma experiments',
      image:  Figma5,
      figmaLink: '/figma'
    },

    {
      id: 10,
      title: 'Pokemon',
      image: oldPokemon,
      description:'A small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.',
      demoLink: 'https://tinabhowal.github.io/simple-js-app/',
      githubLink: 'https://github.com/tinabhowal/simple-js-app',
      
    }
    
  ];

  const displayedProjects = expandedProject ? projects : projects.slice(0, 3);

  const openModal = (projectID) => {
     setExpandedProject(projectID);
     setShowModal(true);
  }

  const closeModal = () => {
    // setExpandedProject(null);
    setShowModal(false);
  }

  // const handleLink = (link) => {
  //   window.open(link, '_blank');
  // }

  return (
  <div className='projects'>
  <Navbar></Navbar>
  
  <div className='body'>
    <Container fluid>
      <Row className='project-row'>
        {displayedProjects.map((project) => (
          <Col key={project.id} xs={12} md={4} className="project-col">
            <Card  className='card'>
              <Card.Img className="project-image" variant='top' src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {project.demoLink && (
                  <Button className='project-button' variant='primary'>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color: 'white'}}>
                    Demo
                    </a>
                  </Button>
                )}
                {' '}
                {project.githubLink && (
                <Button className='project-button' variant='dark'>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color: 'white'}}>
                  GitHub
                  </a>
                  
                </Button>
                )}
                {' '}

                {project.id === 9 && project.figmaLink && (
                  <Button
                  className='border'
                  variant='light'
                  href={project.figmaLink}
                >
                  Show Figma Projects
                </Button>
                )}
                {/* {project.id === 10 && project.caseStudy && (
                  <Button
                  className='border'
                  variant='light'
                >
                  <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                  Case Study
                  </a>
                </Button>
                )} */}
                {/* {expandedProject === project.id ? (
                  <>
                    {project.description && (
                      <Card.Text>{project.description}</Card.Text>
                    )}
                    <Button
                      className='project-button border'
                      variant='light'
                      onClick={() => closeModal()}
                    >
                      Back
                    </Button>
                  </>
                ) : ( */}
                {project.description && (
                  <Button
                    className='border'
                    variant='light'
                    onClick={() => openModal(project.id)}
                  >
                    Project Brief
                  </Button>
                  )}
                {/* )} */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    
      {!expandedProject && projects.length > 3 && (
      <Button
         className='show-more-button'
         variant='light'
         onClick={() => setExpandedProject(true)}
         
         >
          Show More
         </Button>
    )}

    <Modal show={showModal} onHide={closeModal}>
     <Modal.Header closeButton>
      <Modal.Title>Project Brief</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      {expandedProject && projects.map((project) => {
        if(project.id === expandedProject){
          return (
            <div key={project.id}>
              <h3>{project.title}</h3>

              {/* {project.figmaImages && project.figmaImages.map((figmaImage, index) => (
            <img key={index} src={figmaImage} alt={`Figma ${index + 1}`} style={{width:'300px', height:'400px'}}/>
             ))} */}


              <p>{project.description}</p>
            </div>
          );
        }
        return null;
      })}
      </Modal.Body> 
      <Modal.Footer>
        <Button variant='secondary' onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
   
  </div>
</div>

      
    
  )
}

export default Projects;