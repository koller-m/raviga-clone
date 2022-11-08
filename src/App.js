import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Team />
      <Portfolio />
    </div>
  );
}

export default App;
