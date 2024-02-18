import React from "react";
import {
  Box,
  Button,
  Center,
  Stack,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box
      h={"100vh"}
      bg={useColorModeValue("background.light", "background.dark")}
    >
      <Stack
        as={"Box"}
        textAlign={"center"}
        spacing={{ base: "8", md: "14" }}
        py={{ base: "20", md: "16" }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          color={useColorModeValue("text.light", "text.dark")}
        >
          Hey,
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            color={useColorModeValue("accent.light", "accent.dark")}
          >
            I'm Akinloluwa Adedijo
          </Heading>
          <br />
          <Text
            fontWeight={600}
            fontSize={40}
            as={"span"}
            color={useColorModeValue("text.light", "text,dark")}
          >
            Welcome to my website
          </Text>
        </Heading>
      </Stack>
      <Button
        bg={useColorModeValue("primary", "primary")}
        _hover={"none"}
        color={useColorModeValue("text.light", "text.light")}
      >
        About Me
      </Button>
    </Box>
  );
};

export default Home;
