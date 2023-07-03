// import React, { useState, useEffect, useRef } from 'react';
// import './aboutMe.css';
// import image from './images/Frame 8.png';
// import Navbars from './navbar';
// import Map from './map';
// import berlin from './images/berlin.png';


// function AboutMe() {
//   const [text, setText] = useState('');
//   const [textComplete, setTextComplete] = useState(false);
//   const [circularpic, setCircularpic] = useState(false);
//   const [namevisible, setNamevisible] = useState(false);
//   const [nameAside, setNameAside] = useState(false); // Initialize with false
//   const profilePictureRef = useRef(null);

//   useEffect(() => {
//     const message = '<HHello World!/>';
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
//       profilePictureRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });

//       setTimeout(() => {
//         profilePictureRef.current.classList.add('circular');
//         setCircularpic(true);
//       }, 0.02);

//       setTimeout(() => {
//         setNamevisible(true);
//       }, 1000);
//     }
//   }, [textComplete]);

//   useEffect(() => {
//     if (namevisible) {
//       setTimeout(() => {
//         profilePictureRef.current.classList.add('sidebar');
//         const name = document.querySelector('.name-reveal');
//         name.classList.add('sidebar');
//         // const container2 = document.querySelector('.container2');
//         // container2.classList.add('sidebar');

//         // Check if the name element has the sidebar class added
//         const isNameAside = name.classList.contains('sidebar');
//         setNameAside(isNameAside); // Update the value of nameAside state variable
//         if (isNameAside) {
//           setTimeout(() => {
//             const paragraph = document.querySelector('.intro');
//             paragraph.classList.add('intro-visible'); 
//             const berlin = document.querySelector('.berlinimage');
//             berlin.classList.add('berlinimage-visible'); 
//           }, 1000); 
//         }
//       }, 1000);
//     }
//   }, [namevisible]);

  
  

//   return (
//     <div className='aboutMe'>
//       <Navbars></Navbars>

//       <div className={`container ${textComplete ? 'text-complete' : ''}`}>
//         <h1>{text}</h1>
//       </div>

//       <div className='container2'>
//         <div
//           ref={profilePictureRef}
//           className={`profilePicture ${textComplete ? 'visible' : ''}`}
//         >
//           <img className='img' src={image} alt='profile' />
//         </div>

//         {circularpic && (
//           <div className='name-reveal'>
//             <div className='mask'></div>
//             <div className='name'>
//               <h2>Tina Bhawal</h2>
//               {nameAside && (
//                 <div className='introDiv'>
//                   <p className='intro'>
//                     Newbie Front-end Developer <br /> 
//                     Based in Berlin <br />
//                     Love working on Figma<br />
//                     Can doodle and illustrate for hours<br />
//                     Mom to the cutest dog 
//                   </p>
//                 </div>     
//              )}
//             </div>
//           </div>
//         )}
//         {nameAside && (
//         <div className='map-container'>
        
//          {/* <Map className='map' /> */}
//          <img className='berlinimage' src={berlin} alt='Berlin'></img>
//          </div>
//          )}
//       </div>
      
//     </div>
//   );
// }

// export default AboutMe;





import React, { useState, useEffect, useRef } from 'react';
import './aboutMe.css';
import image from './images/Frame 8.png';
import Navbars from './navbar';
// import { useHistory } from 'react-router-dom';


function AboutMe() {
  const [text, setText] = useState('');
  const [textComplete, setTextComplete] = useState(false);
  const [circularpic, setCircularpic] = useState(false);
  const [textShifted, setTextShifted] = useState(false);
  const [picAtSide, setPicAtSide] = useState(false);
  const [introP3visible, setIntroP3visible] = useState(false);
  // const history = useHistory();


  const profilePictureRef = useRef(null);


  useEffect(() => {
    const message = 'Tiina Bhawal';
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex === message.length - 1) {
        clearInterval(timer);
        setTextComplete(true);
        return;
      }

      setText((prevText) => prevText + message[currentIndex]);
      currentIndex++;
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);


  

  useEffect(() => {
    if (textComplete) {
      setTimeout(() => {
                const nameText = document.querySelector('.textElement');
                nameText.classList.add('textShifted');
                setTextShifted(true);
                }, 0.09);

      setTimeout(() => {
                  if (textShifted) {
                  profilePictureRef.current.classList.add('circular');
                  setCircularpic(true);
                  }
                  }, 0.09);          
      
      setTimeout(() => {
                    if (textShifted) {
                      profilePictureRef.current.style.opacity = '1'; // Set opacity to 1
                    }
                  }, 1000);

      setTimeout(() => {
                    if (profilePictureRef.current.classList.contains('circular')) {
                      profilePictureRef.current.classList.add('sidebar');
                      setPicAtSide(true);
                    }
                  }, 2000);
    }
     
  }, [textComplete, textShifted]);

  

  useEffect(() => {
    if (picAtSide) {
      const introDiv = document.createElement('div');
      introDiv.classList.add('introDiv');

      const introP1 = document.createElement('p');
      introP1.textContent = 'Newbie front-end developer. Have experience as a teacher, teacher trainer, and educational content creator.';
      introDiv.appendChild(introP1);

      const introP2 = document.createElement('p');
      introP2.textContent =
        'Love interaction design and exploring UX/UI tools like Figma and Adobe XD.';
      introDiv.appendChild(introP2);

      const introP3 = document.createElement('p');
      introP3.textContent = 'Can doodle and illustrate for hours. Invest time creating learning material with illustrations.';
      introDiv.appendChild(introP3);
      setIntroP3visible(true);

      document.body.appendChild(introDiv);

      introDiv.classList.add('fade-in-0');
      introP1.classList.add('fade-in-1');
      introP2.classList.add('fade-in-2');
      introP3.classList.add('fade-in-3');

      return () => {
        document.body.removeChild(introDiv); 
      };
    }
  }, [picAtSide]);

  useEffect(() => {
    if (introP3visible) {
      const skillsDiv = document.createElement('div');
      skillsDiv.classList.add('introDiv', 'skillsDiv');

      const skillsP1 = document.createElement('p');
      skillsP1.textContent = 'Skills :    HTML, CSS, Javascript, React, Figma';
      skillsDiv.appendChild(skillsP1);

      const learningDiv = document.createElement('div');
      learningDiv.classList.add('introDiv', 'skillsDiv');

      const learningP1 = document.createElement('p');
      learningP1.textContent = 'Acquainted with: Angular, Typescript, React Native, Nodejs, MongoDB';
      learningDiv.appendChild(learningP1);

      

      document.body.appendChild(skillsDiv);
      document.body.appendChild(learningDiv);

      skillsDiv.classList.add('fade-in-0');
      skillsP1.classList.add('fade-in-1');

      learningDiv.classList.add('fade-in-0');
      learningP1.classList.add('fade-in-1');
     
      return () => {
        document.body.removeChild(skillsDiv); 
        document.body.removeChild(learningDiv)
      };
    }
  })



  return (
    <div className='aboutMe'>
      <Navbars></Navbars>

      <div className={`container ${textComplete ? 'text-complete' : ''}`}>
        <h1 className="textElement">{text}</h1>
      </div>

     
      <div
          ref={profilePictureRef}
          className={`profilePicture ${textComplete ? 'visible' : ''}`}
        >
          <img className='img' src={image} alt='profile' />
        </div>

      
    </div>
  );
}

export default AboutMe;

