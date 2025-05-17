import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Services from "./componenets/Service";
import './App.css'
import Projects from "./componenets/Projects";
import Clients from "./componenets/Clients"
import Contact  from "./componenets/Contact";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
