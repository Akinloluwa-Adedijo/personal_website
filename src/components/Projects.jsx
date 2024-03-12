import React, { useEffect, useState, useRef } from "react";
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
  CardFooter,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { projectButtons } from "../data";
import { getProjects, filterProject } from "../data_service";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Projects = () => {
  const [filtProject, setFiltProject] = useState(null);
  const [activeButton, setActiveButton] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { getDisclosureProps, getButtonProps } = useDisclosure();
  // const buttonProps = getButtonProps();
  // const disclosureProps = getDisclosureProps();
  // const [selectedProject, setSelectedProject] = useState({});

  const btnRef = React.useRef();
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
          // templateColumns="1fr 1fr"
          columns={[1, null, 2]}
          p={5}
        >
          {filtProject &&
            filtProject.map((type, index) => (
              <Box
                key={index}
                overflow={"hidden"}
                maxW={"400px"}
                border={"1px"}
                rounded={"md"}
                textColor={useColorModeValue("text.dark", "text.light")}
                borderColor={useColorModeValue("primary.light", "primary.dark")}
              >
                <Box>
                  <Image
                    h={"250px"}
                    maxH={"300px"}
                    w={"100%"}
                    src={type.project_details.additional_media.images[0]}
                    objectFit={"cover"}
                  />
                </Box>
                <Flex
                  bg={useColorModeValue("primary.light", "primary.dark")}
                  _hover={{
                    bg: useColorModeValue("accent.light", "accent.dark"),
                  }}
                  p={2}
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={"space-between"}
                  cursor={"pointer"}
                >
                  <Box onClick={onOpen} ref={btnRef}>
                    {type.title}
                  </Box>
                </Flex>
              </Box>
            ))}
        </SimpleGrid>
      </Center>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{}</DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Projects;
