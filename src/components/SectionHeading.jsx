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
    <Heading
      as={motion.h1}
      initial="hidden"
      variants={headingVariants}
      animate="visible"
      transition={{ delay: 0.5 }}
      fontSize={{ base: "2xl", md: "4xl" }}
      color={useColorModeValue("primary.light", "primary.dark")}
      mb={2}
      mt={10}
    >
      {title}
    </Heading>
  );
};

export default SectionHeading;
