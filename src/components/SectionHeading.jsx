import React from "react";
import { Heading, color, useColorModeValue } from "@chakra-ui/react";

const SectionHeading = (props) => {
  const { title } = props;
  console.log(title);
  return (
    <Heading
      as="h3"
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
