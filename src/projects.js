import React from 'react';
import { useState } from 'react';
import Navbar from './navbar';
import './projects.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import reactImage from './images/myflix client react.png';
import oldPokemon from './images/oldPoke.png';
import angular from './images/angular.png';
import meetApp from './images/meetapp.png';
import chatApp1 from './images/chatapp screenshots.jpeg';
import firstPortfolio from './images/firstportfolio.png';
import myFlixApi from './images/myFlixApi.png';
import newPoke from './images/newPokemon.png';


const Projects = () => {

  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    
    {
      id: 1,
      title: 'Pokemon',
      image: oldPokemon,
      description:'A small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.',
      demoLink: 'https://tinabhowal.github.io/simple-js-app/',
      githubLink: 'https://github.com/tinabhowal/simple-js-app',
      
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
      title: 'myFlix-client-React',
      image: reactImage,
      description:'Using React, the client-side for an app called myFlix is built based on its existing server-side code (REST API and database).',
      demoLink: 'https://figma--mymoviesflix.netlify.app/login',
      githubLink: 'https://github.com/tinabhowal/myFlix-client',
      
    },

    {
      id: 5,
      title: 'myFlix-client-Angular',
      image: angular,
      description:'',
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
    
  ];

  const displayedProjects = expandedProject ? projects : projects.slice(0, 3);

  return (
  <div className='projects'>
  <Navbar></Navbar>
  {/* <div className='header'>Projects</div> */}
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
                  <Button className='project-button' variant='primary' href={project.demoLink}>
                    Demo
                  </Button>
                )}
                {' '}
                <Button className='project-button' variant='dark' href={project.githubLink}>
                  GitHub
                </Button>{' '}
                {expandedProject === project.id ? (
                  <>
                    {project.description && (
                      <Card.Text>{project.description}</Card.Text>
                    )}
                    <Button
                      className='project-button border'
                      variant='light'
                      onClick={() => setExpandedProject(null)}
                    >
                      Back
                    </Button>
                  </>
                ) : (
                  <Button
                    className='border'
                    variant='light'
                    onClick={() => setExpandedProject(project.id)}
                  >
                    Project Brief
                  </Button>
                )}
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
   
  </div>
</div>

      
    
  )
}

export default Projects;