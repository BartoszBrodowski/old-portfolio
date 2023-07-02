import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full flex flex-col items-center m-auto font-poppins text-main-black pt-20 lg:mt-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
