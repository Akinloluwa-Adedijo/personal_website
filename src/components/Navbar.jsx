import react from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Stack,
  Image,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import LogoLight from "../assets/website_logo_light.svg";
import LogoDark from "../assets/website_logo_dark.svg";

const Links = [
  { title: "About Me", name: "about" },
  { title: "Projects", name: "projects" },
  { title: "Graphic Design", name: "graphic_design" },
  { title: "Contact", name: "contact" },
];

const NavigationLinks = (props) => {
  const { children, section } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      href={`#${section}`}
      color={useColorModeValue("text.light", "text.dark")}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("primary.light", "primary.dark"),
        color: useColorModeValue("text.dark", "text.light"),
      }}
      fontSize={"lg"}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("background.light", "background.dark")}
      p={2}
      position={"sticky"}
      top={"0px"}
      w={"100vw"}
      boxShadow="lg"
    >
      <Flex h={16} alignItems="center" justifyContent={"space-between"}>
        <Box p={2}>
          <Image
            boxSize={16}
            src={colorMode === "light" ? LogoLight : LogoDark}
          />
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) => (
            <NavigationLinks key={index} section={link.name}>
              {link.title}
            </NavigationLinks>
          ))}
        </HStack>

        <HStack>
          <IconButton
            size={"md"}
            bg={"none"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            alignContent={"right"}
          />

          <Button onClick={toggleColorMode} siz={"md"} bg={"none"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
              <NavigationLinks key={index} section={link.name}>
                {link.title}
              </NavigationLinks>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
