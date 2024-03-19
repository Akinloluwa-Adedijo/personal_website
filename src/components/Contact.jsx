import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Box position="bottom">
      <Heading textColor={useColorModeValue("primary.light", "primary.dark")}>
        Get In Touch
      </Heading>
      <Box></Box>
    </Box>
  );
};

export default Contact;
