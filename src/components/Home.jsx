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
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box>
      <Center>
        <Flex alignItems={"center"} minW={"300px"} p={10} gap={10}>
          <Box textAlign={"left"}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={useColorModeValue("primary.light", "primary.dark")}
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
            bg={useColorModeValue("primary.light", "primary.dark")}
            size="lg"
          />
        </Flex>
      </Center>
      <Center bg={useColorModeValue("background.light", "background.dark")}>
        <Box h={"max-content"} w={{ base: "md", md: "2xl" }} mt={10} p={10}>
          <Heading
            as={"h3"}
            fontSize={{ base: "2xl", md: "4xl" }}
            color={useColorModeValue("primary.light", "primary.dark")}
            mb={2}
          >
            About Me
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} textAlign={"left"}>
            Hey, Welcome to my small corner of the internet where I unveil a bit
            about myself, projects and things i find interesting. First a bit
            about me. I'm about to be a graduate of the GIS program at Simon
            Fraser University (My Convocation Ceremony is in June and I'm pretty
            excited) The GIS degree is a collaboration between the Department of
            Computer Science and Geography, allowing me to experience an unique
            avenue to combine knowledge from both disciplines. Throughout my
            time at SFU, I've had the opportunity to explore a diverse range of
            classes and projects, all of which have contributed to my growth and
            development. <br />
          </Text>
          <Heading
            as={"h3"}
            fontSize={{ base: "2xl", md: "4xl" }}
            color={useColorModeValue("primary.light", "primary.dark")}
            mb={2}
          >
            Tech Stack
          </Heading>
          <UnorderedList textAlign={"left"}>
            <ListItem>
              <Text as={"span"} fontWeight={600}>
                Programming Languages:
              </Text>{" "}
              Html, CSS, Javascript, React, SQL, Python
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={600}>
                GIS Tools:
              </Text>{" "}
              ArcGIS Pro, ArcGIS Online, QGIS, Google Earth Pro
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={600}>
                Design:
              </Text>
              Figma, Adobe Illustrator, Adobe Photoshop, GIMP, InkScape
            </ListItem>
          </UnorderedList>
          <Heading
            as={"h3"}
            fontSize={{ base: "2xl", md: "4xl" }}
            color={useColorModeValue("primary.light", "primary.dark")}
            mb={2}
            mt={2}
          >
            Experience
          </Heading>
          <Box textAlign={"left"} gap={10}>
            <Text fontWeight={600}>
              Data Analyst Internship @ App growth Network
            </Text>
            <Text fontSize={"sm"}>January - May 2022</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
