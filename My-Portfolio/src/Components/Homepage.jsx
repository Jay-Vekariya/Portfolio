import React, { useState, useEffect } from "react";
import { Divider, useMediaQuery } from "@chakra-ui/react";

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

  const [isLargerThanMobile] = useMediaQuery("(min-width: 30em)");
  const [isLargerThanTablet] = useMediaQuery("(min-width: 48em)");
  const [isLargerThanDesktop] = useMediaQuery("(min-width: 62em)");

  return (
    <div id="Home" className="text-white flex flex-row justify-evenly w-auto">
      <div className="p-4 text-center w-full md:max-w-[700px] place-content-center">
        <h1 className="text-4xl font-serif font-bold min-h-[20%]">
          {name.substring(0, index)}
        </h1>
        <h2 className="text-xl font-serif font-medium">
          I'm a MERN Stack Developer
        </h2>
        <Divider />
        <p>About me</p>
        <h3 className="text-wrap ">
          I am currently pursuing B.Tech Computer Engineering. A full-stack
          Developer with expertise in MERN stack and Tailwind CSS, seeking to
          contribute to impactful software projects with top-notch solutions
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
