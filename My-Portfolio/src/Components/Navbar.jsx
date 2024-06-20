import React from "react";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from '@chakra-ui/react'

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

  return (
    <>
      <nav className="flex justify-between w-auto h-14 bg-black text-white items-center">
        <div className="pl-20">
          <h1 className="font-serif text-3xl font-medium">Jay M. Vekariya</h1>
        </div>
        <div className="">
          <ul className="flex flex-row gap-10 pr-20 items-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
