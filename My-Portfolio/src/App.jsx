import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Academics from "./Components/Academics";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Technical_skills from "./Components/Technical_skills";

const App = () => {
  return (
    <div className="h-auto select-none bg-slate-900 text-white w-auto flex flex-col gap-10 pt-10">
      <Navbar />
      <Homepage />
      <Academics />
      <Technical_skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
