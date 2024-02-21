import React from "react";
import {
  Box,
  Button,
  Highlight,
  Stack,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box bg={useColorModeValue("background.light", "background.dark")} mt={20}>
      <Stack
        as={"Box"}
        textAlign={"center"}
        spacing={{ base: "8", md: "14" }}
        py={{ base: "20", md: "16" }}
      >
        <Heading
          fontWeight={600}
          lineHeight={"tall"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          color={useColorModeValue("text.light", "text.dark")}
        >
          <Highlight
            query={"Akinloluwa Adedijo"}
            styles={{ px: "2", py: "1", rounded: "full", bg: "primary" }}
          >
            Hey, I'm Akinloluwa Adedijo
          </Highlight>
          <Text
            fontWeight={300}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          >
            Welcome to my personal website
          </Text>
          <Button
            bg={"primary"}
            rounded={"full"}
            rightIcon={<ArrowForwardIcon />}
            size={{ base: "sm", sm: "md", md: "lg" }}
          >
            About Me
          </Button>
        </Heading>
      </Stack>
    </Box>
  );
};

export default Home;
