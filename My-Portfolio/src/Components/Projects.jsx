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
  const List_Projects = [
    {
      id: 1,
      Title: "E-commerce-website",
      Image: "./Images/Project_1.jpg",
      Link: "https://e-commerce-website-cikv.onrender.com/",
      Button: "View site",
    },
    {
      id: 2,
      Title: "Online Course Registration",
      Image: "./Images/Project_3.jpg",
      Link: "https://online-course-registration.onrender.com/",
      Button: "View site",
    },
    {
      id: 3,
      Title: "Unit Converter",
      Image: "./Images/Project_2.jpg",
      Link: "https://cute-madeleine-99cc4b.netlify.app/",
      Button: "View site",
    },
    {
      id: 4,
      Title: "Dice Game",
      Image: "./Images/Project_4.jpg",
      Link: "https://testrepo2-zysh.onrender.com/",
      Button: "Play it",
    },
    {
      id: 5,
      Title: "Image Gallery",
      Image: "./Images/Project_5.png",
      Link: "https://react-photo-gallery-assignment.onrender.com",
      Button: "View site",
    },
    {
      id: 6,
      Title: "Todo List App",
      Image: "./Images/todo_List_app.jpg",
      Link: "https://todo-list-app-ta64.onrender.com/",
      Button: "View site",
    }
  ];

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
          {List_Projects.map((projects) => (
            <Card maxW="sm" mt="8">
              <CardBody>
                <Image
                  src={projects.Image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Heading size="md" paddingTop={3}>
                  <Center>{projects.Title}</Center>
                </Heading>
              </CardBody>
              <Divider />
              <CardFooter placeContent="center">
                <Button variant="solid" colorScheme="blue">
                  <a
                    href={projects.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projects.Button}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Center>
    </div>
  );
};

export default Projects;
