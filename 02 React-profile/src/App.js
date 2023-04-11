import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import ContactSection from './components/ContactFormOne';
import Footer from './components/Footer';
import Contact from './components/ContactFormTwo';
import ContactForms from './components/ContactForms';


function App() {



  return (
    <div className="App">
      <Header />
      <Hero />
      <Project />
      {/* <ContactSection /> */}
      {/* <Contact /> */}
      <ContactForms />
      <Footer />
    </div>
  );
}

export default App;
