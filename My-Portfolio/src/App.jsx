import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";

const App = () => {
  return (
    <div className="bg-black h-screen w-auto flex flex-col gap-20">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App;
