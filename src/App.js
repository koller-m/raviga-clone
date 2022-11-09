import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
