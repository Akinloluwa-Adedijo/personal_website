import React from "react";
import {
  Box,
  Center,
  Flex,
  Icon,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

// Icon Imports from react-icons
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { IoLogoGithub, IoIosMail } from "react-icons/io";

// Component Import
import SectionHeading from "./SectionHeading";

// Framer Motion and Section Varint Imports
import { motion } from "framer-motion";
import { opacityVariants } from "./Home";
const Contact = () => {
  return (
    <Center id="contact" h={"50vh"}>
      <motion.div
        initial="hidden"
        variants={opacityVariants}
        animate="visible"
        transition={{ delay: 1.25 }}
      >
        <Box>
          <SectionHeading title="Get In Touch" />
          <Flex w={{ base: "xs", md: "md" }}>
            <Box
              as="a"
              href="mailto:adedijoakinloluwa@gmail.com?subject=Reaching%20Out%20After%20Viewing%20Your%20Website&body=Hey%2C%20My%20name%20is%20"
              target="_blank"
            >
              <Icon
                as={IoIosMail}
                boxSize={{ base: 50, md: 75 }}
                color={useColorModeValue("primary.light", "primary.dark")}
                _hover={{
                  color: useColorModeValue("accent.light", "accent.dark"),
                  cursor: "pointer",
                }}
              />
            </Box>
            <Spacer />
            <Box
              as="a"
              href="https://github.com/Akinloluwa-Adedijo"
              target="_blank"
            >
              <Icon
                as={IoLogoGithub}
                boxSize={{ base: 50, md: 75 }}
                color={useColorModeValue("primary.light", "primary.dark")}
                _hover={{
                  color: useColorModeValue("accent.light", "accent.dark"),
                  cursor: "pointer",
                }}
              />
            </Box>
            <Spacer />
            <Box
              as="a"
              href="https://www.linkedin.com/in/akinloluwa-adedijo-a362b2177/"
              target="_blank"
            >
              <Icon
                as={FaLinkedin}
                boxSize={{ base: 50, md: 75 }}
                color={useColorModeValue("primary.light", "primary.dark")}
                _hover={{
                  color: useColorModeValue("accent.light", "accent.dark"),
                  cursor: "pointer",
                }}
              />
            </Box>

            <Spacer />
            <Box
              as="a"
              href="https://www.behance.net/akinloluwa_adedijo"
              target="_blank"
            >
              <Icon
                as={FaBehance}
                boxSize={{ base: 50, md: 75 }}
                color={useColorModeValue("primary.light", "primary.dark")}
                _hover={{
                  color: useColorModeValue("accent.light", "accent.dark"),
                  cursor: "pointer",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </motion.div>
    </Center>
  );
};

export default Contact;
