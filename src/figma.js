import React from 'react';
import Navbars from './navbar';
import Figma1 from './images/Figma1.png';
import Figma2 from './images/Figma2.png';
import Figma3 from './images/Figma3.png';
import Figma4 from './images/Figma4.png';

const Figma = () => {
  return (
    <div>
        <Navbars></Navbars>
        
        <div style={{textAlign: 'center', color:'white', marginTop:'100px', display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center', gap:'80px'}}>
        Some of my Figma experiments as a participant of "Daily UI Challenge"
        <img src={Figma1} alt='daily UI challenge' style={{width:'70vw'}}></img>

        <img src={Figma2} alt='daily UI challenge' style={{width:'70vw'}}></img>
       
        <img src={Figma3} alt='daily UI challenge' style={{width:'30vw'}}></img>
     
        <img src={Figma4} alt='daily UI challenge' style={{width:'30vw'}}></img>
        
        </div>
    </div>
  )
}

export default Figma