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
  Text,
  Stack,
  CardBody,
  CardFooter,
  Image,
  UnorderedList,
  ListItem,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { projectButtons } from "../data";
import { getProjects, filterProject } from "../data_service";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Projects = () => {
  const [filtProject, setFiltProject] = useState(null);
  const [activeButton, setActiveButton] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    setFiltProject(getProjects());
  }, []);

  function handleProjectType(e, index) {
    let type = e.target.value;
    type !== "all"
      ? setFiltProject(filterProject(type))
      : setFiltProject(getProjects());
    setActiveButton(index);
  }

  return (
    <Box h={"max-content"}>
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={useColorModeValue("primary.light", "primary.dark")}
        mb={5}
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
        <SimpleGrid spacing={4} columns={[1, null, 2]} p={5}>
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
                    src={type.cover_image}
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
                  <Box
                    onClick={() => {
                      onOpen();
                      setSelectedProject(type);
                    }}
                    fontWeight={600}
                  >
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
          size={{ base: "full", sm: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent
            textColor={useColorModeValue("text.light", "text.dark")}
            bg={useColorModeValue("background.light", "background.dark")}
          >
            <DrawerCloseButton />
            <DrawerHeader
              w={{ base: "sm", sm: "md", md: "lg" }}
              fontSize={{ base: 20, sm: 24 }}
              textOverflow={"hidden"}
            >
              {selectedProject.title}
            </DrawerHeader>

            <DrawerBody>
              <Box spacing={10}>
                <Heading fontSize={24}>{selectedProject.heading1}</Heading>
                <Text mt={5}>{selectedProject.p1}</Text>
                <Text mt={5}>{selectedProject.p2}</Text>
                <Heading fontSize={24} mt={5}>
                  {selectedProject.heading2}
                </Heading>
                <Heading fontSize={24} mt={5}>
                  {/* <Avatar
                    name={
                      selectedProject.collaborators &&
                      selectedProject.collaborators.name
                    }
                    src={
                      selectedProject.collaborators &&
                      selectedProject.collaborators.link
                    }
                  /> */}
                </Heading>
                <UnorderedList>
                  {selectedProject.p3 &&
                    selectedProject.p3.map((name, index) => (
                      <ListItem key={index}>{name}</ListItem>
                    ))}
                </UnorderedList>
                <Stack spacing={5} direction={"row"}>
                  {selectedProject.details &&
                    selectedProject.details.access.map((p, index) => (
                      <Box
                        as="a"
                        px={2}
                        py={1}
                        rounded={"md"}
                        href={p.link}
                        mt={3}
                        target="_blank"
                        key={index}
                        bg={useColorModeValue("primary.light", "primary.dark")}
                        textColor={useColorModeValue("text.dark", "text.light")}
                        _hover={{
                          bg: useColorModeValue("accent.light", "accent.dark"),
                        }}
                      >
                        {p.title}
                      </Box>
                    ))}
                </Stack>
              </Box>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Projects;
