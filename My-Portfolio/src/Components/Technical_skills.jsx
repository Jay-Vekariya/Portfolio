import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { CustomeCard } from "./Chakra/CustomeCard";

const Technical_skills = () => {
  return (
    <div id="Technical-Skills">
      <Flex flexDirection="column" gap="8">
        <Center>
          <Heading>Technical Skills</Heading>
        </Center>

        <div>
          <Center>
            <Box>
              <Flex
                flexDirection="row"
                gap="6"
                flexWrap="wrap"
                placeContent="center"
                padding="4"
              >
                <CustomeCard bg="white">
                  <img
                    className="h-12"
                    src="./Images/html-5.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12"
                    src="./Images/css-3.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12"
                    src="./Images/javascript.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12 w-10"
                    src="./Images/tailwind-css.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12 w-10"
                    src="./Images/mongodb.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12"
                    src="./Images/expressjs.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12 w-10"
                    src="./Images/reactjs.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12 w-10"
                    src="./Images/nodejs.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
                <CustomeCard bg="white">
                  <img
                    className="h-12 w-10"
                    src="./Images/redux-toolkit.svg"
                    alt="Jay Vekariya"
                  />
                </CustomeCard>
              </Flex>
            </Box>
          </Center>
        </div>
      </Flex>
    </div>
  );
};

export default Technical_skills;
