import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { IoLogoGithub, IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <Center id="contact" mt={50} h={"50vh"}>
      <Box position="bottom">
        <Heading
          textColor={useColorModeValue("primary.light", "primary.dark")}
          mb={5}
        >
          Get In Touch
        </Heading>
        <Flex w={{ base: "xs", md: "md" }}>
          <Box
            as="a"
            href="mailto:akinloluwa2345@gmail.com?subject=Reaching%20Out%20After%20Viewing%20Your%20Website&body=Hey%2C%20My%20name%20is%20"
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
    </Center>
  );
};

export default Contact;
