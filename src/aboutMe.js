
// import React, { useState, useEffect, useRef } from 'react';
// import './aboutMe.css';
// import image from './images/Frame 8.png';
// import doodle from './images/doodle7.png';
// import newprof from './images/newprof.png';
// import Navbars from './navbar';


// function AboutMe() {
//   const [text, setText] = useState('');
//   const [textComplete, setTextComplete] = useState(false);
//   const [circularpic, setCircularpic] = useState(false);
//   const [textShifted, setTextShifted] = useState(false);
//   const [picAtSide, setPicAtSide] = useState(false);
//   const [introP3visible, setIntroP3visible] = useState(false);
//   // const history = useHistory();


//   const profilePictureRef = useRef(null);


//   useEffect(() => {
//     const message = 'Tiina Bhawal';
//     let currentIndex = 0;

//     const timer = setInterval(() => {
//       if (currentIndex === message.length - 1) {
//         clearInterval(timer);
//         setTextComplete(true);
//         return;
//       }

//       setText((prevText) => prevText + message[currentIndex]);
//       currentIndex++;
//     }, 200);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);


  

//   useEffect(() => {
//     if (textComplete) {
//       setTimeout(() => {
//                 const nameText = document.querySelector('.textElement');
//                 nameText.classList.add('textShifted');
//                 setTextShifted(true);
//                 }, 0.09);

//       setTimeout(() => {
//                   if (textShifted) {
//                   profilePictureRef.current.classList.add('circular');
//                   setCircularpic(true);
//                   }
//                   }, 0.09);          
      
//       setTimeout(() => {
//                     if (textShifted) {
//                       profilePictureRef.current.style.opacity = '1'; // Set opacity to 1
//                     }
//                   }, 1000);

//       setTimeout(() => {
//                     if (profilePictureRef.current.classList.contains('circular')) {
//                       profilePictureRef.current.classList.add('sidebar');
//                       setPicAtSide(true);
//                     }
//                   }, 2000);
//     }

     
//   }, [textComplete, textShifted]);

  

//   useEffect(() => {
//     if (picAtSide) {
//       const introDiv = document.createElement('div');
//       introDiv.classList.add('introDiv');

//       const introP1 = document.createElement('p');
//       introP1.textContent = 'Newbie front-end developer. Have experience as a teacher, teacher trainer, and educational content creator.';
//       introDiv.appendChild(introP1);

//       const introP2 = document.createElement('p');
//       introP2.textContent =
//         'Love exploring UX/UI tools like Figma and Adobe XD. Currently pursuing Google UX design course.';
//       introDiv.appendChild(introP2);

//       const introP3 = document.createElement('p');
//       introP3.textContent = 'Invest time creating learning material with illustrations.';
//       introDiv.appendChild(introP3);
//       setIntroP3visible(true);

//       document.body.appendChild(introDiv);

//       introDiv.classList.add('fade-in-0');
//       introP1.classList.add('fade-in-1');
//       introP2.classList.add('fade-in-2');
//       introP3.classList.add('fade-in-3');

//       return () => {
//         document.body.removeChild(introDiv); 
//       };
//     }
//   }, [picAtSide]);

//   useEffect(() => {
//     if (introP3visible) {
//       const skillsDiv = document.createElement('div');
//       skillsDiv.classList.add('introDiv', 'skillsDiv');

//       const skillsP1 = document.createElement('p');
//       skillsP1.textContent = 'Skills :    HTML, CSS, JavaScript, React, Bootstrap, Angular, Typescript, React Native, Nodejs, Wireframing, Prototyping, User research (competitor analysis, user interviews), User flows, Illustration, MongoDB, SQL, Expo, Adobe XD, Figma ';
//       skillsDiv.appendChild(skillsP1);

//       // const learningDiv = document.createElement('div');
//       // learningDiv.classList.add('introDiv', 'skillsDiv');

//       // const learningP1 = document.createElement('p');
//       // learningP1.textContent = 'Acquainted with: Angular, Typescript, React Native, Nodejs, MongoDB, SQL, Adobe XD';
//       // learningDiv.appendChild(learningP1);

      

//       document.body.appendChild(skillsDiv);
//       // document.body.appendChild(learningDiv);

//       skillsDiv.classList.add('fade-in-0');
//       skillsP1.classList.add('fade-in-1');

//       // learningDiv.classList.add('fade-in-0');
//       // learningP1.classList.add('fade-in-1');
     
//       return () => {
//         document.body.removeChild(skillsDiv); 
//         // document.body.removeChild(learningDiv)
//       };
//     }
//   })



//   return (
//     <div className='aboutMe'>
//       <Navbars></Navbars>

//       <div className={`container ${textComplete ? 'text-complete' : ''}`}>
//         <h1 className="textElement">{text}</h1>
//       </div>

     
//       <div
//           ref={profilePictureRef}
//           className={`profilePicture ${textComplete ? 'visible' : ''}`}
//         >
//           <img className='img' src={newprof} alt='profile' />
//         </div>

      
//     </div>
//   );
// }

// export default AboutMe;











// import React, {useRef, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import {  Button, Container, Row, Col } from 'react-bootstrap';
// import './aboutMe.css';
// import Navbars from './navbar';
// import teacher from './images/teacher.png';
// import ux from './images/ux.png';
// import dev from './images/dev.png';

// function AboutMe() {
//     const secondPageRef = useRef(null);
//     const thirdPageRef = useRef(null);
//     const paraRef = useRef(null);
//     const iconRef = useRef(null);
//     const captionRef = useRef(null);
//     const arrowRef = useRef(null);
//     const secondIconRef = useRef(null);
//     const secondCaptionRef = useRef(null);
//     const secondArrowRef = useRef(null);
//     const thirdIconRef = useRef(null);
//     const thirdCaptionRef = useRef(null);
//     const lastParaRef = useRef(null);

//     const scrollToSecondPage = () => {
//         secondPageRef.current.scrollIntoView({behavior:'smooth'});
//     }

//     const scrollToSkills = () => {
//         thirdPageRef.current.scrollIntoView({behavior:'smooth'})
//     }

//     const scrollToTop =() => {
//         window.scrollTo({
//             top:0,
//             behavior: 'smooth'
//         })
//     }

//     useEffect(() => {
      
//         paraRef.current.style.opacity = '1';
//         paraRef.current.style.transform = 'translateY(0)';
        
//         setTimeout(() => {
//             iconRef.current.style.opacity = '1';
//             iconRef.current.style.transform = 'translateY(0)';
//         }, 1000);

//         setTimeout(() => {
//             captionRef.current.style.opacity = '1';
//             captionRef.current.style.transform = 'translateY(0)';
//         }, 1200);

//         setTimeout(() => {
//             arrowRef.current.style.opacity = '1';
//             arrowRef.current.style.transform = 'translateY(0)';
//         }, 1400);

//         setTimeout(() => {
//             secondIconRef.current.style.opacity = '1';
//             secondIconRef.current.style.transform = 'translateY(0)';
//         }, 1600);

//         setTimeout(() => {
//             secondCaptionRef.current.style.opacity = '1';
//             secondCaptionRef.current.style.transform = 'translateY(0)';
//         }, 1800);

//         setTimeout(() => {
//             secondArrowRef.current.style.opacity = '1';
//             secondArrowRef.current.style.transform = 'translateY(0)';
//         }, 2000);

//         setTimeout(() => {
//             thirdIconRef.current.style.opacity = '1';
//             thirdIconRef.current.style.transform = 'translateY(0)';
//         }, 2200);

//         setTimeout(() => {
//             thirdCaptionRef.current.style.opacity = '1';
//             thirdCaptionRef.current.style.transform = 'translateY(0)';
//         }, 2400);

//         setTimeout(() => {
//             lastParaRef.current.style.opacity = '1';
//             lastParaRef.current.style.transform = 'translateY(0)';
//         }, 2600);
     
//     }, [])
    

//     return (
//         <div className='body'>
//         <div className='aboutMe'>
//             <Navbars />
//             <Container>
//                 <Row>
//                     <Col>
//             <div className='content'>
//                 <h3>Hi! I am Tina.</h3>
//                 <p className='para' ref={paraRef}>I have just learnt how to center a Div and have been dying to show off!
//                     <br></br>
//                     I have evolved from an
//                 </p>
                
//                 <figure className='image-group' >
//                     <div className='image-container'>
//                         <img src={teacher} alt='teacher icon' className='icon' ref={iconRef} />
//                         <figcaption className='caption' ref={captionRef}>Educator</figcaption>
//                     </div>
//                     <span className='arrow' ref={arrowRef}></span>
//                     <div className='image-container' >
//                         <img src={ux} alt='ux icon' className='icon' ref={secondIconRef}/>
//                         <figcaption className='caption' ref={secondCaptionRef}>UX Design</figcaption>
//                     </div>
//                     <span className='arrow' ref={secondArrowRef}></span>
//                     <div className='image-container'>
//                         <img src={dev} alt='developer icon' className='icon' ref={thirdIconRef}/>
//                         <figcaption className='caption' ref={thirdCaptionRef}>Front-End Developer</figcaption>
//                     </div>
//                 </figure>
//                 <p className='journey' ref={lastParaRef}>and what a journey it has been!</p>   
//                 <Button onClick={scrollToSecondPage} className='scrollButton glow-on-hover'> More about me </Button> 
//             </div>
//             </Col>
//           </Row>
//         </Container>   
//         </div>
//         <div ref={secondPageRef} className='secondPage'>
//         <Container>
//           <Row>
//             <Col>
//                 <p className='interest'>
//                    <h3 style={{marginBottom: '2rem'}}> What interests me besides coding you had asked? </h3>
//                    <p> Well, a lot of things like watching TV, reading journals, and writing blogs do not interest me at all!</p>
//                     <p> I like using exclamation marks, doodling, and imagining everything as cartoons in my head. I think everything looks better as a cartoon. Don't forget to check out my doodles!</p>
//                <div className='buttonDiv'>
//                 <Button onClick={scrollToSkills} className='skillButton  glow-on-hover'>Check out my skills</Button>
//                 <Button  className='skillButton  glow-on-hover'><Link to="/projects" style={{color:'#929191', textDecoration:'none'}}>Check out my projects</Link></Button>
//                 </div>
//                 </p>
//                 </Col>
//           </Row>
//         </Container>
//             </div>
            
//             <div ref={thirdPageRef} className='skills'>
//             <Container>
//              <Row className='skillContainer'>
//               <Col className='skillCol'>
               
//                 <ul className='skillUl'>
//                     <h3>Skills</h3>
//                     <li className='liStyle'>HTML</li>
//                     <li className='liStyle'>CSS</li>
//                     <li className='liStyle'>JavaScript</li>
//                     <li className='liStyle'>React</li>  
//                     <li className='liStyle'>Bootstrap</li> 
//                     <li className='liStyle'>Angular</li>
//                     <li className='liStyle'>Typescript</li>
//                     <li className='liStyle'>ReactNative</li>
//                     <li className='liStyle'>Nodejs</li>
//                     <li className='liStyle'>Wireframing</li>
//                     <li className='liStyle'>Prototyping</li>
//                     <li className='liStyle'>Illustration</li>
//                 </ul>
//                 </Col>
               
//                <Col className='skillCol'>
//                 <ul className='skillUl'>
//                     <h3>Tools</h3>
//                     <li className='liStyle'>VS Code</li>
//                     <li className='liStyle'>Figma</li>
//                     <li className='liStyle'>Adobe XD</li>
//                     <li className='liStyle'>MongoDB</li>
//                     <li className='liStyle'>SQL pgAdmin4</li>
//                     <li className='liStyle'>Expo</li>
//                 </ul>
//                 </Col>
//                </Row>
//              </Container>
//             </div>
//             <Button onClick={scrollToTop} className='glow-on-hover' style={{margin:'1rem'}}>Back to top</Button>
//         </div>
//     );
// }

// export default AboutMe;









import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import './aboutMe.css';
import Navbars from './navbar';


function AboutMe() {
    const secondPageRef = useRef(null);
    const thirdPageRef = useRef(null);
   

    const scrollToSecondPage = () => {
        secondPageRef.current.scrollIntoView({behavior:'smooth'});
    }

    const scrollToSkills = () => {
        thirdPageRef.current.scrollIntoView({behavior:'smooth'})
    }

    const scrollToTop =() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    

    return (
        <div className='body'>
        <div className='aboutMe'>
            <Navbars />
            <Container>
                <Row>
                    <Col>
            <div className='content'>
                <h3>Hi! I am Tina.</h3>
                <p style={{marginTop: '10px', fontSize: '0.8rem'}}>A front-End Developer with an insatiable appetite for creativity and a boundless curiosity about the magical realm of interaction design!</p>  
                <p>I started my journey by creating educational content that could meet the different needs of students with varying abilities and learning levels. During this process, I discovered my ability to improve user experiences and interactions through design and technology. This led me to explore the world of UX design, and I quickly realized that my journey was far from over. Bringing my designs to life became my next goal, and I haven't looked back since.</p>
                <Button onClick={scrollToSecondPage} className='scrollButton glow-on-hover'> More about me </Button> 
            </div>
            </Col>
          </Row>
        </Container>   
        </div>
        <div ref={secondPageRef} className='secondPage'>
        <Container>
          <Row>
            <Col>
                <p className='interest'>
                   <h3 style={{marginBottom: '2rem'}}> What interests me besides coding you had asked? </h3>
                    <p>I have a passion for teaching and enjoy creating educational content to share my knowledge. 
                        I find it helpful to document my learning through cartoons, making it easier for me as well as new learners to understand and remember. I plan to share it with the wider audience in the coming days. 
                    </p>
                    <p>Recently, I started a series called "Learn With Me" on <a href='https://medium.com/@tinabhowal88'>Medium</a>, where I share my learnings. If you are interested in learning with me, please feel free to check it out!</p>
               <div className='buttonDiv'>
                <Button onClick={scrollToSkills} className='skillButton  glow-on-hover'>Check out my skills</Button>
                <Button  className='skillButton  glow-on-hover'><Link to="/projects" style={{color:'#929191', textDecoration:'none'}}>Check out my projects</Link></Button>
                </div>
                </p>
                </Col>
          </Row>
        </Container>
            </div>
            
            <div ref={thirdPageRef} className='skills'>
            <Container>
             <Row className='skillContainer'>
              <Col className='skillCol'>
               
                <ul className='skillUl'>
                    <h3>Skills</h3>
                    <li className='liStyle'>HTML</li>
                    <li className='liStyle'>CSS</li>
                    <li className='liStyle'>JavaScript</li>
                    <li className='liStyle'>React</li>  
                    <li className='liStyle'>Bootstrap</li> 
                    <li className='liStyle'>Angular</li>
                    <li className='liStyle'>Typescript</li>
                    <li className='liStyle'>ReactNative</li>
                    <li className='liStyle'>Nodejs</li>
                    <li className='liStyle'>Wireframing</li>
                    <li className='liStyle'>Prototyping</li>
                    <li className='liStyle'>Illustration</li>
                </ul>
                </Col>
               
               <Col className='skillCol'>
                <ul className='skillUl'>
                    <h3>Tools</h3>
                    <li className='liStyle'>VS Code</li>
                    <li className='liStyle'>Figma</li>
                    <li className='liStyle'>Adobe XD</li>
                    <li className='liStyle'>MongoDB</li>
                    <li className='liStyle'>SQL pgAdmin4</li>
                    <li className='liStyle'>Expo</li>
                </ul>
                </Col>
               </Row>
             </Container>
            </div>
            <Button onClick={scrollToTop} className='glow-on-hover' style={{margin:'1rem'}}>Back to top</Button>
        </div>
    );
}

export default AboutMe;
