import React from "react";
import {
  Box,
  Text,
  Center,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Center>
      <Box
        maxW={"3xl"}
        bg={useColorModeValue("background.light", "background.dark")}
        mt={20}
        p={10}
      >
        <Heading
          fontWeight={600}
          color={useColorModeValue("accent.light", "accent.dark")}
        >
          About Me
        </Heading>

        <Text fontWeight={200} textAlign={"left"} mt={5} fontSize={18}>
          I am a fourth-year GIS student at Simon Fraser University (SFU). The
          GIS degree is a collaboration between the Department of Computer
          Science and Geography. Throughout my university experience, I have
          been fortunate to gain knowledge and experience from several classes
          and working on several projects. Recently, I have been working with 3D
          Geo-visualizations to explore alternative ways in which we observe and
          query geographic problems in three dimensions using my knowledge of
          C++, C# with the Unity Game Engine.
        </Text>

        <Heading
          fontWeight={600}
          color={useColorModeValue("accent.light", "accent.dark")}
          mt={20}
        >
          Experience
        </Heading>
        <Text fontWeight={300} textAlign={"left"} mt={5}>
          January - May 2022: Data Analyst Internship @ App Growth Network
        </Text>
      </Box>
    </Center>
  );
};

export default About;
