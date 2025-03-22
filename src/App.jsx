import Navbar from './components/Navbar';
import Home from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css'

function App() {
  return (
    <>
      <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
    </>
  );
}

export default App
