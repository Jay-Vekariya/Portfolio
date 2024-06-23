import React from "react";
import {
  Center,
  Box,
  Heading,
  Text,
  Flex,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CustomeCard } from "./Chakra/CustomeCard";

const steps = [
  { title: "College", description: "Contact Info" },
  { title: "Higher Education", description: "Date & Time" },
  { title: "Secondary Education", description: "Select Rooms" },
];

const Academics = () => {
  const fontSize = useBreakpointValue({
    base: "15px",
    sm: "20px",
    md: "22px",
    lg: "25px",
  });

  return (
    <div className="w-auto p-4"> 
      <Center className="flex flex-col gap-6">
        <div id="About" className="text-wrap">
          <Heading>Academic Credentials</Heading>
        </div>

        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          // onChange={handleTabChange}
        >
          <Center>
            <TabList>
              <Tab h="45px" textColor="white">
                College
              </Tab>
              <Tab h="45px" textColor="white">
                Higher Education
              </Tab>
              <Tab h="45px" textColor="white">
                Secondary Education
              </Tab>
            </TabList>
          </Center>
          <TabPanels textColor="black">
            <TabPanel>
              <CustomeCard>
                <Flex>
                  <Center gap="5">
                    <Text fontSize={fontSize}>
                      Bachelor of Computer Engineering in Marwadi University,
                      <br />
                      Rajkot, Gujarat. (CGPA - 7.07)
                    </Text>
                    <Image
                      src="./Images/Mu_Logo.jpeg"
                      className="h-[100px] bg-black"
                    />
                  </Center>
                </Flex>
              </CustomeCard>
            </TabPanel>
            <TabPanel>
              <CustomeCard>
                <Flex>
                  <Center gap="5">
                    <Text fontSize={fontSize}>
                      Royal Science School, Dhoraji. (PR - 61.08)
                      <br />
                    </Text>
                    <Image
                      src="./Images/Royal_Logo.png"
                      className="h-[100px] bg-black"
                    />
                  </Center>
                </Flex>
              </CustomeCard>
            </TabPanel>
            <TabPanel>
              <CustomeCard>
                <Flex>
                  <Center gap="5">
                    <Text fontSize={fontSize}>
                      Royal International School, Dhoraji. (PR - 97.48)
                      <br />
                    </Text>
                    <Image
                      src="./Images/Royal_Logo.png"
                      className="h-[100px] bg-black"
                    />
                  </Center>
                </Flex>
              </CustomeCard>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </div>
  );
};

export default Academics;
