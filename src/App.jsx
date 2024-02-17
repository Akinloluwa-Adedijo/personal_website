import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LogoLight from "./assets/website_logo_light.svg";
import LogoDark from "./assets/website_logo_dark.svg";
import viteLogo from "/vite.svg";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      bg={useColorModeValue("background.light", "background.dark")}
    >
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
