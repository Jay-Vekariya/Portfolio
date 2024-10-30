import React, { useState, useEffect } from "react";
import { Center, Divider, Button } from "@chakra-ui/react";

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
    <div
      id="Home"
      className="pl-4 pr-6 text-white xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col flex flex-col justify-between lg:justify-around xl:justify-around w-auto"
    >
      <div className="2xl:flex 2xl:flex-col 2xl:place-content-center xl:flex xl:flex-col xl:place-content-center lg:flex lg:flex-col lg:place-content-center md:flex md:flex-col md:place-content-center sm:flex sm:flex-row sm:place-content-center flex flex-row place-content-center">
        <img
          className="xl:object-contain xl:h-72 xl:w-72 lg:h-60 lg:w-60 md:h-52 md:w-52 sm:h-40 sm:w-40 h-40 w-40 rounded-full"
          src="./Images/Myimg_3.JPG"
          alt="Profile_Img"
        />
      </div>
      <div className="lg:pr-12 text-center w-full xl:max-w-[720px] md:max-w-[500px] lg:max-w-[550px] min-h-[300px] flex flex-col items-center xl:min-h-[200px]  xl:items-center sm:p-8 place-content-center">
        <h1 className="font-serif font-bold  xl:min-h-[80px] xl:text-[34px] lg:min-h-[60px] lg:text-[30px] md:min-h-[50px] md:text-[25px] sm:min-h-[50px] sm:text-[25px] text-[20px] min-h-[50px]">
          {name.substring(0, index)}
        </h1>
        <Divider />
        <Center>
          <Button variant="solid" colorScheme="blue" m={4}>
            About me
          </Button>
        </Center>
        <h2 className="font-sans uppercase font-medium text-[15px] xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[16px]">
          Developer with expertise in the MERN stack.
        </h2>
        <h3 className="text-wrap text-[15px] xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[16px]">
          Pursuing a B.Tech in Computer Engineering with strong skills in
          full-stack development, focusing on the MERN stack and Tailwind CSS.
          Committed to delivering effective solutions to meaningful software
          projects.
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
