import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <div className="p-4" id="Projects">
      <Center>
        <Heading>Projects</Heading>
      </Center>
      <Center>
        <Flex
          flexDirection="row"
          gap="16"
          flexWrap="wrap"
          placeContent="center"
        >
          <Card maxW="sm" mt="8">
            <CardBody>
              <Image
                src="./Images/Project_1.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Heading size="md" paddingTop={3}>
                <Center>E-commerce-website</Center>
              </Heading>
            </CardBody>
            <Divider />
            <CardFooter placeContent="center">
              <Button variant="solid" colorScheme="blue">
                <a
                  href="https://e-commerce-website-cikv.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm" mt="8">
            <CardBody>
              <Image
                src="./Images/Project_3.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Heading size="md" paddingTop={3}>
                <Center>Online Course Registration</Center>
              </Heading>
            </CardBody>
            <Divider />
            <CardFooter placeContent="center">
              <Button variant="solid" colorScheme="blue">
                <a
                  href="https://online-course-registration.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm" mt="8">
            <CardBody>
              <Image
                src="./Images/Project_2.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Heading size="md" paddingTop={3}>
                <Center>Unit Converter</Center>
              </Heading>
            </CardBody>
            <Divider />
            <CardFooter placeContent="center">
              <Button variant="solid" colorScheme="blue">
                <a
                  href="https://cute-madeleine-99cc4b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm" mt="8">
            <CardBody>
              <Image
                src="./Images/Project_4.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Heading size="md" paddingTop={3}>
                <Center>Dice Game</Center>
              </Heading>
            </CardBody>
            <Divider />
            <CardFooter placeContent="center">
              <Button variant="solid" colorScheme="blue">
                <a
                  href="https://testrepo2-zysh.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play it
                </a>
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Center>
    </div>
  );
};

export default Projects;
