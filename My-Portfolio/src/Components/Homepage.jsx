import React, { useState, useEffect } from "react";
import { Center, Divider, useMediaQuery } from "@chakra-ui/react";

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
      <div className="p-4 text-center w-full md:max-w-[700px] min-h-[300px] flex flex-col items-center xl:min-h-[200px]  xl:items-center sm:p-8 place-content-center">
        <h1 className="font-serif font-bold  xl:min-h-[80px] xl:text-[40px] lg:min-h-[60px] lg:text-[32px] md:min-h-[50px] md:text-[28px] sm:min-h-[50px] sm:text-[25px] text-[20px] min-h-[60px]">
          {name.substring(0, index)}
        </h1>
        <h2 className="font-serif font-medium text-[10px] xl:text-[22px] lg:text-[18px] md:text-[17px] sm:text-[16px]">
          I'm a MERN Stack Developer
        </h2>
        <Divider />
        <Center>
          <p className="m-3 border box-border w-20 p-1">About me</p>
        </Center>
        <h3 className="text-wrap text-[11px] xl:text-[20px] lg:text-[22px] md:text-[17px] sm:text-[16px]">
          I am currently pursuing B.Tech Computer Engineering. A full-stack
          Developer with expertise in MERN stack and Tailwind CSS, seeking to
          contribute to impactful software projects with top-notch solutions
        </h3>
      </div>
      <div className="flex felx-col items-center md:flex md:flex-col md:items-center">
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
