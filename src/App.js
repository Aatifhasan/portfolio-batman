import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonaHeader from './components/PersonaHeader';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FunFacts from './components/FunFacts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="section-divider"></div>

      <PersonaHeader
        id="batman-section"
        title="The Dark Knight"
        subtitle="Guarding Gotham's servers by night, architecting backend systems by day"
        color="yellow"
      />
      <Experience />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />

      <div className="section-divider" style={{ margin: '4rem 0' }}></div>

      <PersonaHeader
        id="bruce-wayne-section"
        title="Bruce Wayne"
        subtitle="The Guy Behind the Cowl — Tech Architect & Engineer"
        color="cyan"
      />
      <About />
      <FunFacts />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
