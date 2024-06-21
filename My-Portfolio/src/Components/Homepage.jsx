import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < name.length) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setIndex(0);
        }, 2000); // Change the delay time as per your requirement
      }
    }, 100);
    return () => clearInterval(timer);
  }, [name, index]);

  useEffect(() => {
    const fullName = "Hello, I'm Jay M. Vekariya";
    setName(fullName);
  }, []);

  return (
    <div id="Home" className="text-white flex flex-row justify-evenly w-auto">
      <div className="text-center w-full md:max-w-[700px] place-content-center">
        <h1 className="text-5xl font-serif font-bold min-h-[20%]">
          {name.substring(0, index)}
        </h1>
        <h2 className="text-2xl font-serif font-medium">
          I'm a MERN Stack Developer
        </h2>
        <h3 className="text-wrap">
          Full-Stack Web Developer | Expertise in MERN Stack: React.js, Redux
          Toolkit, Node.js, Express.js, MongoDB | Proficient in Tailwind CSS
        </h3>
      </div>
      <div className="">
        <img
          className="h-78 w-72 rounded-full"
          src="./Images/Myimg_1.JPG"
          alt="Profile_Img"
        />
      </div>
    </div>
  );
};

export default Homepage;
