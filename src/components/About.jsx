import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      h={"100%"}
      bg={useColorModeValue("background.light", "background.dark")}
    >
      This is the about section
    </Box>
  );
};

export default About;
