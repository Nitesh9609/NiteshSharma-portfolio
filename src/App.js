
import './App.css';
import About from './components/about/About';
import ContactMe from './components/contactMe/ContactMe';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <Nav/>
    </div>
  );
}

export default App;
