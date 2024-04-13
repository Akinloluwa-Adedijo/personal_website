import React from "react";
import { Heading, color, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const SectionHeading = (props) => {
  const { title } = props;
  return (
    // <motion.div
    //   as={motion.h1}
    //   initial="hidden"
    //   variants={headingVariants}
    //   animate="visible"
    //   transition={{ delay: 0.25 }}
    // >
    <Heading
      fontSize={{ base: "2xl", md: "4xl" }}
      color={useColorModeValue("primary.light", "primary.dark")}
      mb={5}
      mt={10}
    >
      {title}
    </Heading>
    // </motion.div>
  );
};

export default SectionHeading;
