import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Intrest from './components/Intrest.js';
import Skills from './components/Skills.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Myfooter from './components/Myfooter.js';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Intrest/>
    <Skills/>
    <Project/>
    <Contact/>
    <Myfooter/>
    </>
  );
}

export default App;
