import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Spacer,
  useColorModeValue,
  filter,
} from "@chakra-ui/react";
import { projectButtons } from "../data";
import { getProjects, filterProject } from "../data_service";

const Projects = () => {
  const [filtProject, setFiltProject] = useState(null);
  useEffect(() => {
    setFiltProject(getProjects());
  }, []);

  function handleProjectType(e) {
    let type = e.target.value;
    type !== "all" ? "true" : "false";
    type !== "all"
      ? setFiltProject(filterProject(type))
      : setFiltProject(getProjects());
  }
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
            {projectButtons &&
              projectButtons.map((type, index) => (
                <Button
                  key={index}
                  value={type.value}
                  onClick={handleProjectType}
                  color={useColorModeValue("text.light", "primary")}
                  px={2}
                  py={1}
                  bg={"none"}
                  _hover={{
                    bg: "primary",
                    color: "text.light",
                  }}
                  _active={{ bg: "primary", color: "text.light" }}
                >
                  {type.name}
                </Button>
              ))}
          </Flex>
        </Flex>
      </Center>
      {filtProject &&
        filtProject.map((type) => (
          <ul key={type.id}>
            <li>{type.title}</li>
          </ul>
        ))}
    </Box>
  );
};

export default Projects;
