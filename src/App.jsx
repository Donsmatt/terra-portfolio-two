import Footer from "./components/Footer";
import MySkill from "./components/MySkills";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <>
      <h1>Hello World</h1>
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
