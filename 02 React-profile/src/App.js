import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <Project />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
