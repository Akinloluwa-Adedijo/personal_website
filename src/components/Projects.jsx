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
  SimpleGrid,
  Card,
  Stack,
  CardBody,
  Image,
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
      <Center>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          // maxW={"4xl"}
        >
          {filtProject &&
            filtProject.map((type) => (
              // <ul key={type.id}>
              //   <li>{type.title}</li>
              // </ul>
              <Card bg={useColorModeValue("primary.light", "primary.dark")}>
                <CardBody>
                  <Image
                    src={type.project_details.additional_media.images[0]}
                    fit={"contain"}
                  />
                  <Stack mt={2} spacing={3}>
                    <Heading
                      size={"md"}
                      color={useColorModeValue("text.dark", "text.light")}
                      fontSize={"md"}
                      textAlign={"left"}
                      overflow={"fill"}
                    >
                      {type.title}
                    </Heading>
                  </Stack>
                  {/* {console.log(type.project_details.additional_media.images[0])} */}
                </CardBody>
              </Card>
            ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Projects;
