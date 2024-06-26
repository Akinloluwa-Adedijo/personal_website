import React from "react";

// Chakra Imports
import {
  Box,
  Heading,
  Center,
  Flex,
  Avatar,
  Text,
  Icon,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

// Icon Imports from react-icons
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

// Typewriter Effect Import from typewriter-effect
import Typewriter from "typewriter-effect";

// Component Import
import SectionHeading from "./SectionHeading";

// Framer Motion Import
import { motion } from "framer-motion";

// Opacity Variants for animated sections on load
export const opacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  return (
    <Box id="about" h={"100%"}>
      <motion.div
        initial="hidden"
        variants={opacityVariants}
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <Center mt={10}>
          <Flex
            alignItems={"center"}
            minW={"300px"}
            w={{ base: "md", md: "2xl" }}
            p={10}
            gap={50}
            direction={{ base: "column", md: "row" }}
          >
            <Box textAlign={"left"}>
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
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
              <Flex direction="row" gap={25} mt={2} alignContent={"center"}>
                <Box
                  as="a"
                  href="https://github.com/Akinloluwa-Adedijo"
                  target="_blank"
                >
                  <Icon
                    as={VscGithubAlt}
                    boxSize={30}
                    color={useColorModeValue("primary.light", "primary.dark")}
                    _hover={{
                      color: useColorModeValue("accent.light", "accent.dark"),
                      cursor: "pointer",
                    }}
                  />
                </Box>

                <Box
                  as="a"
                  href="https://www.linkedin.com/in/akinloluwa-adedijo-a362b2177/"
                  target="_blank"
                >
                  <Icon
                    as={SlSocialLinkedin}
                    boxSize={30}
                    color={useColorModeValue("primary.light", "primary.dark")}
                    _hover={{
                      color: useColorModeValue("accent.light", "accent.dark"),
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Avatar
              name="Akinloluwa Adedijo"
              bg={useColorModeValue("primary.light", "primary.dark")}
              size="2xl"
            />
          </Flex>
        </Center>
      </motion.div>

      <motion.div
        initial={"hidden"}
        variants={opacityVariants}
        animate="visible"
        transition={{ delay: 0.75 }}
      >
        <Center bg={useColorModeValue("background.light", "background.dark")}>
          <Box h={"max-content"} w={{ base: "md", md: "2xl" }} mt={10} p={10}>
            <SectionHeading title="About Me" />
            <Text textAlign={"left"}>
              Hey, Welcome to my small corner of the internet where I unveil a
              bit about myself, projects and things i find interesting. First a
              bit about me. I'm about to be a graduate of the GIS program at
              Simon Fraser University (My Convocation Ceremony is in June and
              I'm pretty excited) The GIS degree is a collaboration between the
              Department of Computer Science and Geography, allowing me to
              experience an unique avenue to combine knowledge from both
              disciplines. Throughout my time at SFU, I've had the opportunity
              to explore a diverse range of classes and projects, all of which
              have contributed to my growth and development.
            </Text>
            <SectionHeading title="Tech Stack" />

            <UnorderedList textAlign={"left"}>
              <ListItem>
                <Text
                  as={"span"}
                  fontWeight={600}
                  color={useColorModeValue("primary.light", "primary.dark")}
                >
                  Programming Languages:
                </Text>{" "}
                Html, CSS, Javascript, React, SQL, Python
              </ListItem>
              <ListItem>
                <Text
                  as={"span"}
                  fontWeight={600}
                  color={useColorModeValue("primary.light", "primary.dark")}
                >
                  GIS Tools:
                </Text>{" "}
                ArcGIS Pro, ArcGIS Online, QGIS, Google Earth Pro
              </ListItem>
              <ListItem>
                <Text
                  as={"span"}
                  fontWeight={600}
                  color={useColorModeValue("primary.light", "primary.dark")}
                >
                  Design:
                </Text>
                Figma, Adobe Illustrator, Adobe Photoshop, GIMP, InkScape
              </ListItem>
            </UnorderedList>

            <SectionHeading title="Experience" />
            <Box textAlign={"left"} gap={10}>
              <Text
                fontWeight={600}
                color={useColorModeValue("primary.light", "primary.dark")}
              >
                Data Analyst Internship @ App Growth Network
              </Text>
              <Text fontSize={"sm"}>January - May 2022</Text>
            </Box>
          </Box>
        </Center>
      </motion.div>
    </Box>
  );
};

export default Home;
