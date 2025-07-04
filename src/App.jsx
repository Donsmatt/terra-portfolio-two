import Footer from "./components/Footer";
import MySkill from "./components/MySkills";
import SelectedWork from "./components/SelectedWork";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./ui/About";
import Slider from "./ui/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <div className="app">
        <SelectedWork />
        <MySkill />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
