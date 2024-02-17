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

const Links = ["About Me", "Projects", "Contact"];

const NavigationLinks = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      href={"#"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("accent.light", "accent.dark"),
      }}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("background.light", "background.dark")} p={2}>
      <Flex h={16} alignItems="center" justifyContent={"space-between"}>
        <Box p={1}>
          <Image
            boxSize={16}
            src={colorMode === "light" ? LogoLight : LogoDark}
          />
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavigationLinks key={link}>{link}</NavigationLinks>
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
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavigationLinks key={link}>{link}</NavigationLinks>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
