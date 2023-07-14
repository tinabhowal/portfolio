import React from 'react';
import Navbars from './navbar';
import doodle1 from './images/doodle1.png';
import doodle2 from './images/doodle2.png';
import doodle3 from './images/doodle3.png';
import doodle4 from './images/doodle4.png';
import doodle5 from './images/doodle5.png';
import doodle6 from './images/doodle6.png';

const Jokes = () => {
  return (
    <div style={{color:'white', marginTop:'100px', display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center', gap:'80px'}}>
    <Navbars></Navbars>

    <div>
        <p>When I asked ChatGPT what he thinks about me.</p>
        <img src={doodle5} alt='jokes' style={{height:'350px', width:'700px'}}></img>
        <p>He went on to explain it further.  :(</p>
        <img src={doodle6} alt='jokes' style={{height:'350px', width:'700px'}}></img>
    </div>

    <div>
    <p>How my mother taught me about if else statement.</p>    
    <img src={doodle1} alt='jokes' style={{height:'350px', width:'350px'}}></img>
    <img src={doodle2} alt='jokes' style={{height:'350px', width:'350px'}}></img>
    </div>

    <div>
        <p>Did you say imposter syndrome?</p>
        <img src={doodle3} alt='jokes' style={{height:'350px', width:'350px'}}></img>
        <img src={doodle4} alt='jokes' style={{height:'350px', width:'350px'}}></img>
    </div>
   
    </div>
  )
}

export default Jokes