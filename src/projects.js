import React from 'react';
import { useState } from 'react';
import Navbar from './navbar';
import './projects.css';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import reactImage from './images/myflix client react.png';
//import oldPokemon from './images/oldPoke.png';
//import angular from './images/angular.png';
//import meetApp from './images/meetapp.png';
//import chatApp1 from './images/chatapp screenshots.jpeg';
//import firstPortfolio from './images/firstportfolio.png';
import myFlixApi from './images/myFlixApi.png';
//import newPoke from './images/newPokemon.png';
import myLilDictionary from './images/myLittleDictionary.png';
import bonCafe from './images/bonCafe.png';
import Figma5 from './images/Figma5.png';
import portfolio from './images/newprof2.png';
import dailyGermanPhrase from './images/dailyGermanPhrase.png';
import chatImage from './images/Colorful Planner Mobile App Promotion Instagram Post.png';

const Projects = () => {

  const [expandedProject, setExpandedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [

    {
      id: '17',
      title: 'BonCaffe',
      toolsAndLibraries: ['#HTML', '#CSS', '#Javascript'],
      image: bonCafe,
      description:'Collaborated with other developer in building a website for a cafe.',
      demoLink: 'https://boncaffe.in/',
    },
    
    {
      id: 3,
      title: 'Translation App',
      toolsAndLibraries: ['#Chatgpt Open AI API', '#AWS Lambda', '#AWS API Gateway', '#AWS DynamoDB', '#Google User Authentication'],
      image: myLilDictionary,
      description:'Translation web application integrated with ChatGPT Open AI API. It helps to translate and save the translations for future use. One can also play games with the saved words/translations to reinforce learning. ChatGPT Open AI API has been used for translating and generating games. The saved translations are saved in AWS DynamoDB.',
      demoLink: 'https://mylittledictionary.vercel.app/',
      githubLink: 'https://github.com/tinabhowal/my-little-dictionary',
      
    },

    {
      id: 2,
      title: 'Daily German Phrase',
      toolsAndLibraries: ['#AWS', '#DynamoDB', '#SES', '#AWS API Gateway', '#React', ],
      image: dailyGermanPhrase,
      description:'An AWS learning and development project. An application for beginners learning German to receive regular emails with a German phrase. The frontend is built with React. The backend has Lambda, AWS SES, API Gateway at work.',
      demoLink: 'https://dailygermanphrase.vercel.app/',
      githubLink: 'https://github.com/tinabhowal/germanPhraseDynamoDB',
      
    },
    
    {
      id: 1,
      title: 'myFlix-client-React',
      toolsAndLibraries: ['#React', '#React Bootstrap', '#React Redux', '#React Router', '#REST API'],
      image: reactImage,
      description:'Using React, the client-side for an app called myFlix is built based on its existing server-side code (REST API and database). It also uses React Redux for state management and React Bootstrap for a neat UI.',
      demoLink: 'https://figma--mymoviesflix.netlify.app/login',
      githubLink: 'https://github.com/tinabhowal/myFlix-client',
    },

    {
      id: 4,
      title: 'myFlix-api',
      toolsAndLibraries: ['#NodeJS', '#Express', '#Passport', '#User Authentication', '#REST API', '#MongoDB'],
      image: myFlixApi,
      description:'The server-side component of a “movies” web application built with NodeJS and Express. The web application provides users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies. User authentication is taken care of by Passport local strategy and JWT token. For the database, MongoDB has been used.',
      // demoLink: 'https://myflix-gqp8.onrender.com',
      githubLink: 'https://github.com/tinabhowal/movie_api',
      
    },

    {
      id: 5,
      title: 'My React Portfolio',
      toolsAndLibraries: ['#React', '#React Router'],
      image: portfolio,
      description: 'My first practice portfolio, which was built using HTML and CSS, has been rebuilt using React js.',
      githubLink: 'https://github.com/tinabhowal/portfolio',
      caseStudy: 'https://drive.google.com/file/d/1BBtT_q4DEGLv1ZpKviQ-gQtI1GbkfNf1/view?usp=sharing'
      
      
    },

    // {
    //   id: 6,
    //   title: 'myFlix-client-Angular',
    //   image: angular,
    //   description:'Using Angular, the client-side for an app called myFlix is built based on its existing server-side code (REST API and database).',
    //   demoLink: 'https://my-flix-angular-client-qh47v87k4-tinabhowal.vercel.app/welcome',
    //   githubLink: 'https://github.com/tinabhowal/myFlix-Angular-client',
     
    // },

    // {
    //   id: 7,
    //   title: 'MeetApp',
    //   image: meetApp,
    //   description:'A serverless, progressive web application (PWA) is built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
    //   demoLink: 'https://tinabhowal.github.io/meet/',
    //   githubLink: 'https://github.com/tinabhowal/meet',
      
    // },

    {
      id: 8,
      title: 'ChatApp',
      toolsAndLibraries: ['#React Native', '#Gifted Chat', '#Google Firestore', '#Expo'],
      image: chatImage,
      description:'Mobile chat apps are among the most commonly downloaded and used apps in the world, so knowing how to build a chat app is an indispensable skill. The app demonstrates React Native development skills. It provides users with a chat interface and options to share images, videos and their location. Expo and Giften Chat library has been used to develop the app and Google Firestore to store the chat messages.',
      demoLink: 'https://drive.google.com/file/d/1-XRlqpVIKAqozukG8f5NgiyH276M0UW0/view?usp=sharing',
      githubLink: 'https://github.com/tinabhowal/Chat-App',
      
    },

    // {
    //   id: 9,
    //   title: 'My first practice portfolio',
    //   image: firstPortfolio,
    //   description:'A responsive website using HTML and CSS that showcases my first practice portfolio.',
    //   demoLink: 'https://tinabhowal.github.io/tinaprofile/careerfoundry/',
    //   githubLink: 'https://github.com/tinabhowal/tinaprofile',
      
    // },

    {
      id: 10,
      title: 'My Figma experiments',
      toolsAndLibraries: ['#Figma', '#DailyUI Challenge'],
      description: 'Some of my experiments with Figma as a participant of Daily UI Challenge.',
      image:  Figma5,
      figmaLink: '/figma'
    },

    // {
    //   id: 11,
    //   title: 'Pokemon',
    //   image: oldPokemon,
    //   description:'A small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.',
    //   demoLink: 'https://tinabhowal.github.io/simple-js-app/',
    //   githubLink: 'https://github.com/tinabhowal/simple-js-app',
      
    // }
    
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
              <Card.Img className="project-image" variant='top' src={project.image}  />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {project.toolsAndLibraries && (<Card.Text>{project.toolsAndLibraries.join('  ')}</Card.Text>)}
                <div className='buttons'>
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

                {project.id === 10 && project.figmaLink && (
                  <Button
                  className='project-button' variant='primary'
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
                </div>
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