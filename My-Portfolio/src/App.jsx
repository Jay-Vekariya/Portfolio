import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-black text-white w-auto flex flex-col gap-20 p-10">
      <Navbar />
      <Homepage />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
