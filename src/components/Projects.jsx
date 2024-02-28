import React from "react";
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
  // console.log(children);
  return (
    <Box
      as="button"
      px={2}
      py={1}
      height="36px"
      rounded="md"
      color={useColorModeValue("text.light", "primary")}
      fontSize="lg"
      _hover={{
        bg: "primary",
        color: "text.light",
      }}
      _active={{
        bg: "primary",
        color: "text.light",
      }}
    >
      {children}
    </Box>
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
