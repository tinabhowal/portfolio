import React, { useState, useEffect, useRef } from 'react';
import './aboutMe.css';
import image from './images/Frame 8.png';
import Contact from './contact';
import Projects from './projects';

function AboutMe() {
  const [text, setText] = useState('');
  const [textComplete, setTextComplete] = useState(false);
  const [circularpic, setCircularpic] = useState(false);
  const [namevisible, setNamevisible] = useState(false);
  const profilePictureRef = useRef(null);
 
  

  useEffect(() => {
    const message = 'Heello World!';
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex === message.length - 1) {
        clearInterval(timer);
        setTextComplete(true);
        return;
      }

      setText((prevText) => prevText + message[currentIndex]);
      currentIndex++;
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (textComplete) {
      profilePictureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        profilePictureRef.current.classList.add('circular');
        setCircularpic(true);
      }, 0.02);

      setTimeout(() => {
        setNamevisible(true);
      }, 2000);
    }
  }, [textComplete]);




  useEffect(() => {
    if (namevisible) {
      setTimeout(() => {
        profilePictureRef.current.classList.add('sidebar');
        const name = document.querySelector('.name-reveal');
        name.classList.add('sidebar');
        const container2 = document.querySelector('.container2');
        container2.classList.add('sidebar');
  
        // Check if the name element has the sidebar class added
        if (name.classList.contains('sidebar')) {
          setTimeout(() => {
            const paragraph = document.querySelector('.intro');
            paragraph.classList.add('intro-visible'); 
          }, 3000); 
        }
      }, 2000);
    }
  }, [namevisible]);
  
  
  


  

  return (
    <div className='aboutMe'>
      <div className={`container ${textComplete ? 'text-complete' : ''}`}>
        <h1>{text}</h1>
      </div>


     
       <div className='container2'>
       <div
        ref={profilePictureRef}
        className={`profilePicture ${textComplete ? 'visible' : ''}`}
       >
        <img className='img' src={image} alt='profile' />
       </div>
         {circularpic && (
         <div 
         className='name-reveal'>
            <div className='mask'></div>
            <div className='name'><h2>Tina Bhawal</h2></div>
          </div>
          )}
     </div>

     <div className='introDiv'>
      <p className='intro'>
        Newbie Front-end Developer <br /> 
        Based in Berlin <br />
        Love working on Figma<br />
        Can doodle and illustrate for hours<br />
        Mom to the cutest dog 
      </p>
     </div>
     
        
     <div className='sidebar'></div>

    </div>
  );
}

export default AboutMe;













