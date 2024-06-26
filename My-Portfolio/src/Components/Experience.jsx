import {
  Center,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { CustomeCard } from "./Chakra/CustomeCard";

const Experience = () => {
  const fontSize = useBreakpointValue({
    base: "10px",
    sm: "20px",
    md: "22px",
    lg: "16px",
    xl: "20px",
  });

  return (
    <div className="p-4">
      <div>
        <Center>
          <Heading>Experience</Heading>
        </Center>
      </div>
      <div className="xl:flex xl:flex-row xl:gap-10 xl:justify-around xl:pt-12 lg:flex lg:flex-row lg:gap-10 lg:justify-around lg:pt-12 md:flex md:flex-col md:pl-8 md:gap-10 md:justify-around md:pt-12 flex flex-col gap-8 pt-8">
        <CustomeCard
          bgColor="white"
          color="black"
          className=" xl:w-[700px] xl:max-h-[200px] lg:w-[600px] lg:min-h-[200px] lg:max-h-[200px]h-auto"
        position="relative"
        >
          <Flex>
            <Center gap="5">
              <Flex flexDirection="column">
                <Heading textColor="black" fontSize="18px">
                  Bluesoft Infotech
                </Heading>
                <Text fontSize={fontSize}>
                  Worked as <strong>intern</strong> in Blue soft Infotech for{" "}
                  <strong>3 Months.</strong> That helped me gain experience in
                  commercial fields and helped me learn react.js with learning
                  and made projects on <strong>Ecommerce Website.</strong>
                </Text>
              </Flex>
              <Image
                src="./Images/Bluesoft.png"
                className="h-[100px] bg-black"
              />
            </Center>
          </Flex>
        </CustomeCard>{" "}
        <CustomeCard
          bgColor="white"
          color="black"
          className=" xl:w-[700px] xl:min-h-[200px] lg:w-[600px] lg:min-h-[200px] lg:max-h-[200px] max-h-auto"
        >
          <Flex>
            <Center gap="5">
              <Flex flexDirection="column">
                <Heading textColor="black" fontSize="18px">
                  Codesoft
                </Heading>
                <Text fontSize={fontSize}>
                  Worked as <strong>intern</strong> in Codsoft as React.js
                  Developer for <strong>1 Month.</strong>
                  It's been a rewarding journey of self-discovery and
                  skill-building.
                </Text>
              </Flex>
              <Image src="./Images/codesoft.jpg" className="h-[100px] " />
            </Center>
          </Flex>
        </CustomeCard>
        {/* <Center>
          <CustomeCard
            bgColor="white"
            // width="50%"
            flexDirection="row"
            className="xl:w-[40%] xl:flex xl:flex-row xl:gap-5 xl:justify-around xl:items-center xl:min-w-[60%] lg:min-w-[80%] lg:flex lg:flex-row lg:gap-5 lg:justify-around lg:items-center lg:min-h-[80%]  md:w-[40%] md:flex md:flex-row md:gap-5 md:justify-around md:items-center sm:w-[40%] sm:flex sm:flex-row sm:gap-5 sm:justify-around sm:items-center"
          >
            <Flex>
              <Center>
                <div className=" xl:mr-5">
                  <img
                    className="xl:h-[120px] xl:w-[400px] lg:h-[120px] lg:w-[300px]"
                    src="./Images/Bluesoft.png"
                    alt="Experience"
                  />
                </div>
              </Center>
              <div className="xl:flex xl:flex-col xl:gap-3">
                <Heading textColor="black" fontSize="25px">
                  Bluesoft Infotech
                </Heading>
                <p className=" text-slate-800 xl:text-[16px]">
                  {" "}
                  Worked as <strong>intern</strong> in Blue soft Infotech for{" "}
                  <strong>3 Months.</strong> That helped me gain experience in
                  commercial fields and helped me learn react.js with learning
                  and made projects on <strong>Ecommerce Website.</strong>
                </p>
              </div>
            </Flex>
          </CustomeCard>
        </Center>
        <Center>
          <CustomeCard
            bgColor="white"
            width="60%"
            flexDirection="row"
            className="xl:w-[40%] xl:flex xl:flex-row xl:gap-5 xl:justify-around xl:items-center xl:min-w-[90%] lg:min-w-[90%] lg:flex lg:flex-row lg:gap-28 lg:justify-evenly lg:items-center lg:min-h-[80%] md:w-[40%] md:flex md:flex-row md:gap-5 md:justify-around md:items-center sm:w-[40%] sm:flex sm:flex-row sm:gap-5 sm:justify-around sm:items-center"
          >
            <Flex>
              <div>
                <img
                  className="xl:h-[120px] xl:w-[400px] lg:h-[120px] lg:w-[300px]"
                  src="./Images/Bluesoft.png"
                  alt="Experience"
                />
              </div>
              <div className="xl:flex xl:flex-col xl:gap-3">
                <Heading textColor="black" fontSize="25px">
                  Codesoft
                </Heading>
                <p className=" text-slate-800 xl:text-[16px]">
                  Worked as <strong>intern</strong> in Codsoft as React.js
                  Developer for <strong>1 Month.</strong>
                  It's been a rewarding journey of self-discovery and
                  skill-building.
                </p>
              </div>
            </Flex>
          </CustomeCard>
        </Center> */}
      </div>
    </div>
  );
};
export default Experience;
