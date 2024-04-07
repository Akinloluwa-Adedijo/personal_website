import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

const NavButtons = (props) => {
  const { title, section } = props;
  return (
    <a href={`#${section}`}>
      <Button
        px={2}
        py={1}
        rounded={"md"}
        bg="none"
        color={useColorModeValue("text.light", "text.dark")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("primary.light", "primary.dark"),
          color: useColorModeValue("text.dark", "text.light"),
        }}
        fontSize={"lg"}
      >
        {title}
      </Button>
    </a>
  );
};

export default NavButtons;
