// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colrs, fonts, e.t.c

const colors = {
  text: {
    light: "#000000",
    dark: "#FFFFFF",
  },
  background: {
    light: "#E9F7F9",
    dark: "#000000",
  },
  primary: "#8FB3FF",
  primary_light: "#1F345F",
  primary_dark: "#8FB3FF",
  // primary_dark_alter: "#1D2F52",
  secondary: {
    light: "#EBF1FF",
    dark: "#001952",
  },
  accent: {
    light: "#D41D6C",
    dark: "#F199BF",
  },
};

const theme = extendTheme({ colors });
export default theme;
