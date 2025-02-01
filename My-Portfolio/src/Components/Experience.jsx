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
    <div className="p-4" id="Experience">
      <div>
        <Center>
          <Heading>Experience</Heading>
        </Center>
      </div>
      <div className="flex-wrap xl:flex xl:flex-row xl:gap-10 xl:justify-around xl:pt-12 lg:flex lg:flex-row lg:gap-10 lg:justify-around lg:pt-12 md:flex md:flex-col md:pl-8 md:gap-10 md:justify-around md:pt-12 flex flex-col gap-8 pt-8">
        <CustomeCard
          bgColor="white"
          color="black"
          className=" xl:w-[700px] xl:max-h-[200px] lg:w-[600px] lg:min-h-[200px] lg:max-h-[200px]h-auto"
          position="relative"
        >
          <Flex>
            <Center gap="5">
              <Flex flexDirection="column">
                <Heading textColor="black" fontSize="22px">
                  <u>Bluesoft Infotech</u>
                </Heading>
                <Text className="text-wrap text-[15px] xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[16px]">
                  Worked as <strong>intern</strong> in Blue soft Infotech for{" "}
                  <strong>3 Months.</strong> That helped me gain experience in
                  commercial fields and helped me learn react.js with learning
                  and made projects on <strong>Ecommerce Website.</strong>
                </Text>
              </Flex>
              {/* <Image
                src="./Images/Bluesoft.png"
                className="h-[100px] bg-black"
              /> */}
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
                <Heading textColor="black" fontSize="22px">
                  <u> Codesoft </u>
                </Heading>
                <Text className="text-wrap text-[15px] xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[16px]">
                  Worked as <strong>intern</strong> in Codsoft as React.js
                  Developer for <strong>1 Month.</strong>
                  It's been a rewarding journey of self-discovery and
                  skill-building.
                </Text>
              </Flex>
              {/* <Image src="./Images/codesoft.jpg" className="h-[100px] " /> */}
            </Center>
          </Flex>
        </CustomeCard>
        {/* 3rd card */}
        <CustomeCard
          bgColor="white"
          color="black"
          className=" xl:w-[700px] xl:min-h-[200px] lg:w-[600px] lg:min-h-[200px] lg:max-h-[200px] max-h-auto"
        >
          <Flex>
            <Center gap="5">
              <Flex flexDirection="column">
                <Heading textColor="black" fontSize="22px">
                  <u>Zeronesays LLP</u>
                </Heading>
                <Text className="text-wrap text-[15px] xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[16px]">
                  Starting an exciting new chapter as an{" "}
                  <strong>Software developer intern</strong> at{" "}
                  <strong>Zeronesays LLP</strong> in Surat, Gujarat. Looking
                  forward to gaining hands-on experience, tackling new
                  challenges, and expanding my knowledge in the software
                  development field.
                </Text>
              </Flex>
            </Center>
          </Flex>
        </CustomeCard>
      </div>
    </div>
  );
};
export default Experience;
