import { Box } from "@chakra-ui/react";

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Chakra Import
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box
      textAlign="center"
      bg={useColorModeValue("background.light", "background.dark")}
      w={"100vw"}
    >
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
