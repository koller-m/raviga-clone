import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Team />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
