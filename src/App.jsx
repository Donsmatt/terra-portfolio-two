
import Footer from "./components/Footer";
import MySkill from "./components/MySkills";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
      <Work />
      <MySkill />
      <Contact />
      <Footer />
    </>
  );
}

export default App;