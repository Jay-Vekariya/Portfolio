import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Heading,
  Stack,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
              <a href="#About">Academic Credentials</a>
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
                rightIcon={<IoArrowForward />}
                colorScheme="white"
                variant="outline"
              >
                <a href="#Contact">Contact</a>
              </Button>
            </li>
          </li>
          <li className="list-none">
            <button
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              className="text-3xl lg:hidden cursor-pointer"
            >
              &#9776;
            </button>
          </li>
        </ul>
      </nav>
      <>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
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
                      <a onClose={onClose} finalFocusRef={btnRef} href="#Home">
                        Home
                      </a>
                    </Text>
                    <Text>
                      <a href="#About">Academic Credentials</a>
                    </Text>
                    <Text>
                      <a href="#Experience">Experience</a>
                    </Text>
                    <Text>
                      <a href="#Projects">Projects</a>
                    </Text>
                    <Text>
                      <a href="#Contact">Contact</a>
                    </Text>
                  </VStack>
                </Box>
              </Stack>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Navbar;
