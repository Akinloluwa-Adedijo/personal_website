// react Imports
import React, { useEffect, useState } from "react";

// Chakra UI Imports
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Text,
  Stack,
  Image,
  UnorderedList,
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

// Project Object helper functions
import { projectButtons } from "../data";
import { getProjects, filterProject } from "../data_service";

// Component Import
import SectionHeading from "./SectionHeading";

// Framer Motion and Section Varint Imports
import { motion } from "framer-motion";
import { opacityVariants } from "./Home";

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
    <Box id="projects">
      <motion.div
        initial="hidden"
        variants={opacityVariants}
        animate="visible"
        transition={{ delay: 1.0 }}
      >
        <SectionHeading title="Projects" />
        <Center>
          <Flex>
            <Flex direction={"row"} gap={10} mb={5}>
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
          <SimpleGrid spacing={5} columns={[1, null, 2]} p={5}>
            {filtProject &&
              filtProject.map((type, index) => (
                <Box
                  key={index}
                  overflow={"hidden"}
                  maxW={"400px"}
                  border={"1px"}
                  rounded={"md"}
                  textColor={useColorModeValue("text.dark", "text.light")}
                  borderColor={useColorModeValue(
                    "primary.light",
                    "primary.dark"
                  )}
                >
                  <Box>
                    <Image
                      h={"250px"}
                      maxH={"300px"}
                      w={"100%"}
                      src={type.cover_image}
                      objectFit={"cover"}
                      alt="Project Thumbnail"
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
      </motion.div>

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
                <Heading fontSize={24} mt={5}></Heading>
                <UnorderedList>
                  {selectedProject.p3 &&
                    selectedProject.p3.map((name, index) => (
                      <ListItem key={index}>{name}</ListItem>
                    ))}
                </UnorderedList>
                <Stack spacing={5} direction={"row"}>
                  {selectedProject.details &&
                    selectedProject.details.access.map((p, index) => (
                      <a href={p.link} target="_blank">
                        <Button
                          px={2}
                          py={1}
                          rounded={"md"}
                          mt={3}
                          key={index}
                          bg={useColorModeValue(
                            "primary.light",
                            "primary.dark"
                          )}
                          textColor={useColorModeValue(
                            "text.dark",
                            "text.light"
                          )}
                          _hover={{
                            bg: useColorModeValue(
                              "accent.light",
                              "accent.dark"
                            ),
                          }}
                        >
                          {p.title}
                        </Button>
                      </a>
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
