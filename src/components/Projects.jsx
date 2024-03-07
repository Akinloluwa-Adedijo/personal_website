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
  const [activeButton, setActiveButton] = useState(0);
  useEffect(() => {
    setFiltProject(getProjects());
  }, []);

  function handleProjectType(e, index) {
    let type = e.target.value;
    type !== "all" ? "true" : "false";
    type !== "all"
      ? setFiltProject(filterProject(type))
      : setFiltProject(getProjects());
    // console.log(index);
    setActiveButton(index);
  }
  return (
    <Box h={"max-content"}>
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={useColorModeValue("primary.light", "primary.dark")}
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
                  onClick={(e) => handleProjectType(e, index)}
                  color={useColorModeValue("text.light", "text.dark")}
                  px={2}
                  py={1}
                  bg={"none"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("primary.light", "primary.dark"),
                    color: useColorModeValue("text.dark", "text.light"),
                  }}
                  _active={{
                    textDecoration: "none",
                    bg: useColorModeValue("primary.light", "primary.dark"),
                    color: useColorModeValue("text.dark", "text.light"),
                  }}
                  isActive={activeButton === index ? "true" : ""}
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
