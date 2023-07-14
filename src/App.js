import './App.css';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import FunFacts from './funfacts';
import Jokes from './jokes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudyMaterial from './studyMaterial';
import Figma from './figma';


function App() {

  
  return (
<Router>
  <Routes>
  <Route exact path="/" element={<AboutMe />} />
  <Route exact path="/portfolio" element={<AboutMe />} />
  <Route exact path="/projects" element={<Projects />} />
  <Route exact path="/contact" element={<Contact />} />
  <Route exact path="/funfacts" element={<FunFacts />} />
  <Route exact path="/jokes" element={<Jokes />} />
  <Route exact path="/studyMaterial" element={<StudyMaterial />} />
  <Route exact path="/figma" element={<Figma />} />
  </Routes>
  </Router>
  
  );
}

export default App;
