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
import { projectButtons } from "../data";
import { getProjects } from "../data_service";

const ProjectToggleButton = (props) => {
  const { children } = props;

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
            {/* <ProjectToggleButton>random</ProjectToggleButton> */}
            {projectButtons &&
              projectButtons.map((type, index) => (
                <ProjectToggleButton key={index} value={type.value}>
                  {type.name}
                </ProjectToggleButton>
              ))}
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Projects;
