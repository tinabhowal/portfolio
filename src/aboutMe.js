import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import './aboutMe.css';
import Navbars from './navbar';


function AboutMe() {
    const secondPageRef = useRef(null);
    const thirdPageRef = useRef(null);
    const [showMore, setShowMore] = useState(false);
   

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
    

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div className='body'>
        <div className='aboutMe'>
            <Navbars />
            <Container>
                <Row>
                    <Col>
            <div className='content'>
                <h3>Hi! I am Tina,</h3>
                {/* <p style={{marginTop: '10px', fontSize: '0.8rem'}}>A front-End Developer with an insatiable appetite for creativity and a boundless curiosity about the magical realm of interaction design!</p>  
                <p>I started my journey by creating educational content that could meet the different needs of students with varying abilities and learning levels. During this process, I discovered my ability to improve user experiences and interactions through design and technology. This led me to explore the world of UX design, and I quickly realized that my journey was far from over. Bringing my designs to life became my next goal, and I haven't looked back since.</p> 
                 */}
                

<p>a passionate frontend developer with a unique blend of skills and a rich background in education. Having recently completed a comprehensive Full Stack Web Development and AWS Cloud Computing course from Career Foundry, I am now on the lookout for opportunities that align with my expertise and enthusiasm for frontend development.</p>


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
                
                   {/* <h3 style={{marginBottom: '2rem'}}> What interests me besides coding you had asked? </h3>
                    <p>I have a passion for teaching and enjoy creating educational content to share my knowledge. 
                        I find it helpful to document my learning through cartoons, making it easier for me as well as new learners to understand and remember. I plan to share it with the wider audience in the coming days. 
                    </p>
                    <p>Recently, I started a series called "Learn With Me" on <a href='https://medium.com/@tinabhowal88'>Medium</a>, where I share my learnings. If you are interested in learning with me, please feel free to check it out!</p> */}
               <p className='interest'>
               <h3>Why Consider Hiring Me?</h3>

{/* <p>🚀 Full Stack Expertise: Armed with proficiency in <span> HTML, CSS, and JavaScript </span>, I am well-versed in modern frontend technologies, including <span>React, Jest, and React Redux </span>. My solid foundation in <span>AWS Cloud Computing </span>enhances my ability to create robust and scalable applications.</p>

<p>🌐 Versatility: Beyond frontend development, I bring a valuable touch of <span>TypeScript </span>to the table. Additionally, my foray into <span>UX design</span>, marked by the completion of an introductory course, equips me with a holistic perspective on 
crafting user-friendly and visually appealing interfaces.

</p> */}

<p>🚀 Frontend Development: I have hands-on experience with frontend technologies like <span>React, React Redux, and React with TypeScript </span>. I’ve also worked with <span>Jest</span> for testing applications, which has helped me build more reliable and maintainable code.</p>

<p>🌐 Full-Stack Familiarity: While I enjoy frontend development, I’m also well familiar with backend technologies such as <span>Node.js and Express</span>, giving me a better understanding of how the full stack works together.</p>

<p>☁️ Cloud Computing: I have foundational knowledge of <span>AWS</span> services such as Lambda, API Gateway, IAM, S3, DynamoDB, EC2, VPC, etc. I’m eager to deepen my skills in cloud computing and expand my understanding of cloud services.</p>

<p>💡 Versatility: In addition to my frontend development skills, I’ve gained a strong foundation in <span>UX design</span> through an introductory course. This gives me a well-rounded approach to creating user-friendly and visually appealing interfaces. I also have functional knowledge of <span>German/Deutsch</span> and am currently pursuing B1.1 proficiency.

</p>

{showMore &&  ( 
<>
<p>🎓 Educational Pedigree: Prior to venturing into the tech world, I accumulated over a decade of experience as a teacher, teacher trainer, and educational content creator. This background instills in me a unique set of skills, including effective communication, adaptability, and a keen understanding of user needs—a trifecta that seamlessly translates into frontend development.</p>

<h6>Certifications and Achievements:</h6>
<ul>
<li>🏆 Career Foundry Graduate: Full Stack Web Development </li>
<li>🌐 Career Foundry Graduate: AWS Cloud Computing</li>
<li>📘 Career Foundry Graduate: Introduction to UX Design Course Completion</li>
</ul>

<h3>Why have I Transitioned?</h3>

<p>My transition from the education sector to tech stems from a deep-seated passion for problem-solving and a desire to create meaningful digital experiences. Leveraging my teaching and training background, I bring a fresh perspective to frontend development—translating complex ideas into user-friendly applications.

I am excited about the prospect of contributing my skills and experience to a dynamic team. Let's build something incredible together!</p>
</>
                                )
                                }

<p>
<Button style={{backgroundColor: 'transparent', border: 'none'}} onClick={toggleShowMore}>
    {!showMore && "...Read more"}
    </Button>
</p>
                                
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
                    <li className='liStyle'>Typescript</li>
                    <li className='liStyle'>ReactNative</li>
                    <li className='liStyle'>Nodejs</li>
                    <li className='liStyle'>Jest</li>
                    <li className='liStyle'>AWS Cloud Computing</li>
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
