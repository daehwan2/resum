import Education from "./components/Education";
import Introduce from "./components/Introduce";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="text-[16px] md:text-[20px] md:w-[750px] md:mx-[auto]">
      <Profile />
      <hr className="my-[10px]" />
      <Introduce />
      <hr className="my-[10px]" />
      <Education />
      <hr className="my-[10px]" />
      <Projects />
    </div>
  );
}

export default App;
