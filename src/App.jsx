import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Services from "./componenets/Service";
import './App.css'
import Projects from "./componenets/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Projects/>
    </div>
  );
}

export default App;
