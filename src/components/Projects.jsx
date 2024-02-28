import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

const names = ["All", "Web Development", "GIS"];

const ProjectToggleButton = (props) => {
  const { children } = props;
  const [active, setActive] = useState("All");
  const [bright, setbright] = useState("true");

  const toggleActive = (name) => {
    setActive(name);
    console.log(`This button should be active ${active}`);
  };

  return (
    <Button
      color={useColorModeValue("tect.light", "primary")}
      px={2}
      py={1}
      bg={"none"}
      _hover={{
        bg: "primary",
        color: "text.light",
      }}
      _active={{ bg: "primary", color: "text.light" }}
      onClick={() => toggleActive(children)}
    >
      {children}
    </Button>
  );
};
const Projects = () => {
  return (
    <Box h={"max-content"}>
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={useColorModeValue("accent.light", "accent.dark")}
      >
        Projects
      </Heading>
      <Center>
        <Flex>
          <Flex direction={"row"} gap={10}>
            {names.map((name) => (
              <ProjectToggleButton key={name}>{name}</ProjectToggleButton>
            ))}
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Projects;
