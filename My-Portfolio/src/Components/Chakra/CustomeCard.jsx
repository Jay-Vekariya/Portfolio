import { chakra } from "@chakra-ui/react";

export const CustomeCard = chakra("div", {
  baseStyle: {
    bg: "black",
    color: "white",
    borderRadius: "xl",
    p: "6",
    boxShadow: "1px 4px 10px 1.5px rgb(93, 93, 93)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    h: "20%",
  },
});
