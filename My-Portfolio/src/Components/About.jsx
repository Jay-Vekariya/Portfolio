import React from "react";
import { Center, Box, Heading, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const steps = [
  { title: "College", description: "Contact Info" },
  { title: "Higher Education", description: "Date & Time" },
  { title: "Secondary Education", description: "Select Rooms" },
];

const About = () => {
  const fontSize = useBreakpointValue({ base: "20px", sm: "24px", md: "28px", lg: "30px" });

  return (
    <div className="w-auto">
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
              <Tab textColor="white">College</Tab>
              <Tab textColor="white">Higher Education</Tab>
              <Tab textColor="white">Secondary Education</Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <Card
                align="center"
                bg="black"
                color="white"
                border="1px solid white"
                w="auto"
              >
                <CardBody>
                  <Text fontSize={fontSize}>
                    Bachelor of Computer Engineering in Marwadi University,
                    <br />
                    Rajkot, Gujarat. (CGPA - 7.07)
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card
                align="center"
                bg="black"
                color="white"
                border="1px solid white"
                w="auto"
              >
                <CardBody>
                  <Text fontSize={fontSize}>
                    Royal Science School, Dhoraji. (PR - 61.08)
                    <br />
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card
                align="center"
                bg="black"
                color="white"
                border="1px solid white"
                w="auto"
              >
                <CardBody>
                  <Text fontSize={fontSize}>
                    Royal International School, Dhoraji. (PR - 97.48) <br />
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </div>
  );
};

export default About;
