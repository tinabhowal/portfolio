import './App.css';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  
  return (
    // <div  className="App">
    //   <AboutMe></AboutMe>
    //   <Projects></Projects>
    //   <Contact></Contact>
    // </div>



<Router>
  <Routes>
  <Route exact path="/" element={<AboutMe />} />
  <Route exact path="/portfolio" element={<AboutMe />} />
  <Route exact path="/projects" element={<Projects />} />
  <Route exact path="/contact" element={<Contact />} />
  </Routes>
  </Router>
  
  );
}

export default App;
