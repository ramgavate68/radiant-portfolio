import Hero from "./componenets/Hero";
import About from "./componenets/About";
import './App.css'
import Clients from "./componenets/Clients"
import Contact  from "./componenets/Contact";
import Footer from "./componenets/Footer";
import OurProducts from "./componenets/Ourproducts";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <OurProducts />
      <div style={{marginTop: '15rem'}}></div>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
