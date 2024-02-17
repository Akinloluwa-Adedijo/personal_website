import React from "react";
import {
  Box,
  Center,
  Stack,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

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
          color={useColorModeValue("tect.light")}
        ></Heading>
      </Stack>
    </Box>
  );
};

export default Home;
