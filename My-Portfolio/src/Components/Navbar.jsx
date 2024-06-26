import React, { useState, useRef } from "react";
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
  useToast,
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
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const btnRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();

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

  //Contect form data in direct send to Email..
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iv1scia", "template_lx6us2d", form.current, {
        publicKey: "8asV3e73wcQHYDorc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleCloseModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
              <a href="#Technical-Skills">Technical Skills</a>
            </li>
            <li className="cursor-pointer">
              {" "}
              <a href="#Experience">Experience</a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
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
                    <form ref={form} onSubmit={sendEmail}>
                      <FormControl>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                          // ref={initialRef}
                          placeholder="Enter Your Name"
                          name="from_name"
                          required
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Your Email</FormLabel>
                        <Input
                          placeholder="Enter Your Email"
                          name="from_email"
                          required
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <Textarea
                          placeholder="Your Message"
                          name="message"
                          required
                        />
                      </FormControl>
                      <ModalFooter placeContent="center">
                        <Button
                          type="submit"
                          colorScheme="blue"
                          mr={3}
                          onClick={(e) => {
                            const formData = new FormData(form.current);
                            const isFormEmpty = Array.from(
                              formData.values()
                            ).every((value) => value === "");

                            if (!isFormEmpty) {
                              // Create an example promise that resolves in 2s
                              const examplePromise = new Promise(
                                (resolve, reject) => {
                                  setTimeout(() => resolve(200), 2000);
                                }
                              );

                              toast.promise(examplePromise, {
                                success: {
                                  title: "Email send successfully..!",
                                  description: "Looks great",
                                },
                                error: {
                                  title: "Promise rejected",
                                  description: "Something wrong",
                                },
                                loading: {
                                  title: "Data sending...",
                                  description: "Please wait",
                                },
                              });
                            }
                          }}
                        >
                          Submit
                        </Button>
                      </ModalFooter>
                    </form>
                  </ModalBody>
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
                <VStack fontWeight="600" fontSize="xl">
                  <Text>
                    <a
                      onClose={handleCloseDrawer}
                      finalFocusRef={btnRef}
                      href="#Home"
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      Home
                    </a>
                  </Text>
                  <Text>
                    <a
                      href="#Academics"
                      onClick={handleCloseDrawer}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      Academic Credentials
                    </a>
                  </Text>
                  <Text>
                    <a
                      href="#Technical-Skills"
                      onClick={handleCloseDrawer}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      Technical Skills
                    </a>
                  </Text>
                  <Text>
                    <a
                      href="#Experience"
                      onClick={handleCloseDrawer}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      Experience
                    </a>
                  </Text>
                  <Text>
                    <a
                      href="#projects"
                      onClick={handleCloseDrawer}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      Projects
                    </a>
                  </Text>
                  <Text>
                    <a
                      href="#Contact"
                      onClick={() => {
                        handleOpenModal();
                        handleCloseDrawer();
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
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
