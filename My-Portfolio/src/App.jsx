import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Academics from "./Components/Academics";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="h-auto   bg-black text-white w-auto flex flex-col gap-10 pt-10">
      <Navbar />
      <Homepage />
      <Academics />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
