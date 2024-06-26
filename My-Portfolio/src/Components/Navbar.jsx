import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Center,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FcAssistant } from "react-icons/fc";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const btnRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-around w-auto h-14 bg-black text-white items-center fixed top-0 left-0 right-0">
        <div>
          <h1 className="flex items-center gap-3 font-serif text-3xl text-center font-medium">
            <FcBusinessman className="text-[35px]" /> Jay M. Vekariya
          </h1>
        </div>
        <ul>
          <li className="md:hidden hidden sm:hidden lg:flex lg:flex-row gap-10 items-center pr-20">
            <li className="cursor-pointer flex items-center gap-1">
              <IoHome />
              <a href="#Home">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#Academics">Academic Credentials</a>
            </li>
            <li className="cursor-pointer">
              {" "}
              <a href="#Experience">Experience</a>
            </li>
            <li className="cursor-pointer">
              <a href="#Projects">Projects</a>
            </li>
            <li className="cursor-pointer">
              <Button
                rightIcon={<FcAssistant />}
                colorScheme="white"
                variant=""
                bgColor="orange.600"
                onClick={handleOpenModal}
              >
                Contact
              </Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Center>
                      <Heading>Get In Touch</Heading>
                    </Center>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Your Name</FormLabel>
                      <Input ref={initialRef} placeholder="Enter Your Name" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Your Email</FormLabel>
                      <Input placeholder="Enter Your Email" />
                    </FormControl>

                    <FormControl mt={4}>
                      <Textarea placeholder="Your Message" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter placeContent="center">
                    <Button colorScheme="blue" mr={3}>
                      Submit
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </li>
          </li>
          <li className="list-none">
            <button
              ref={btnRef}
              colorScheme="teal"
              onClick={handleOpenDrawer}
              className="text-3xl lg:hidden cursor-pointer"
            >
              &#9776;
            </button>
          </li>
        </ul>
      </nav>
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={handleCloseDrawer}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Heading fontSize="20px" as="h1" textAlign="center" pt="3.5rem">
            Jay M. Vekariya
          </Heading>

          <DrawerBody>
            <Stack textAlign="center">
              <Box mt="6" mx="3" textAlign="center">
                <VStack fontWeight="600">
                  <Text>
                    {" "}
                    <a
                      onClose={handleCloseDrawer}
                      finalFocusRef={btnRef}
                      href="#Home"
                    >
                      Home
                    </a>
                  </Text>
                  <Text>
                    <a href="#Academics" onClick={handleCloseDrawer}>
                      Academic Credentials
                    </a>
                  </Text>
                  <Text>
                    <a href="#Experience" onClick={handleCloseDrawer}>
                      Experience
                    </a>
                  </Text>
                  <Text>
                    <a href="#Projects">Projects</a>
                  </Text>
                  <Text>
                    <a
                      href="#Contact"
                      onClick={() => {
                        handleOpenModal();
                        handleCloseDrawer();
                      }}
                    >
                      Contact
                    </a>
                  </Text>
                </VStack>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
