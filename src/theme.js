// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colrs, fonts, e.t.c

// const colors = {
//   text: {
//     light: "#000000",
//     dark: "#FFFFFF",
//   },
//   background: {
//     light: "#E9F7F9",
//     dark: "#181E34",
//   },
//   primary: {
//     light: "#1F345F",
//     dark: "#8FB3FF",
//   },
//   secondary: {
//     light: "#EBF1FF",
//     dark: "#001952",
//   },
//   accent: {
//     light: "#D41D6C",
//     dark: "#F199BF",
//   },
// };

const colors = {
  text: {
    light: "#141110",
    dark: "#efeceb",
  },
  background: {
    light: "#ede9e8",
    dark: "#171312",
  },
  primary: {
    light: "#51443e",
    dark: "#c1b4ae",
  },
  secondary: {
    light: "#EBF1FF",
    dark: "#001952",
  },
  accent: {
    light: "#5b765e",
    dark: "#89a48c",
  },
};

const theme = extendTheme({ colors });
export default theme;
