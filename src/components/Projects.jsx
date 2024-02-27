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
              <Button
                color={useColorModeValue("text.light", "text.dark")}
                colorScheme="primary"
                variant={"outline"}
                key={name}
              >
                {name}
              </Button>
            ))}
            {/* <Button
              color={useColorModeValue("text.light", "text.dark")}
              colorScheme="primary"
              variant={"outline"}
            >
              All
            </Button>
            <Spacer />
            <Button>Web Development</Button>
            <Spacer />
            <Button>GIS</Button> */}
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Projects;
