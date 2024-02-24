import React from "react";
import {
  Box,
  Button,
  Highlight,
  Stack,
  VStack,
  HStack,
  Heading,
  Center,
  Spacer,
  Flex,
  Avatar,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box
      bg={useColorModeValue("background.light", "background.dark")}
      mt={5}
      h={"80vh"}
    >
      <Center>
        <Flex alignItems={"center"} minW={"200px"} p={10} gap={10}>
          <Box textAlign={"left"}>
            <Heading
              as="h2"
              color={useColorModeValue("accent.light", "accent.dark")}
            >
              Akinloluwa Adedijo
            </Heading>
            <Typewriter
              options={{
                strings: [
                  "Aspiring Software Developer",
                  "Aspiring GIS Developer",
                  "Graphic Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <Avatar
            name="Akinloluwa Adedijo"
            bg={useColorModeValue("accent.light", "accent.dark")}
            size="lg"
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Home;
