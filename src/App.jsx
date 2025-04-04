import Navbar from './components/Navbar';
import Home from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team_Testimonial from './pages/Team_Testimonial';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Team_Testimonial/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App
