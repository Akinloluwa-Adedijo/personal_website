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

const buttonNames = [
  { name: "All", value: "all" },
  { name: "Web Development", value: "web_development" },
  { name: "GIS", value: "gis" },
];

const projects = [
  {
    id: 1,
    title: "Essential Services in Vancouver",
    category: "gis",
    heading1: "Overview",
    p1: "The Essential Services is a web mapping application that provides users with the ability to locate essential facilities around Vancouver.",
    p2: "This Webapp was made using ArcGIS Online which is a cloud based mapping platform for the creation of maps, analysis of data which can be shared to the public accessed from any device.",
    heading2: "Tools",
    p3: "ArcGIS Online",
    heading3: "Gallery",
    image1: "put reference to image",
    image2: "put reference to image",
  },
  {
    id: 2,
    title:
      "Suitable Areas for MCE Analysis for Afforestation in Burnaby, BC Native tree Species",
    category: "gis",
    heading: "Overview",
    p1: "",
    p2: "",
  },
  {
    id: 3,
    title:
      "Modelling the Feasibility of Mass Evacuations in High Rise Buildings using Unity",
    category: "gis",
    heading: "",
    p1: "",
  },
  {
    id: 4,
    title:
      "Visualizing Mass Evacuation Scenarios in different Interfaces( Augmented Reality and Desktop) in Unity",
    category: "gis",
  },
];

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
