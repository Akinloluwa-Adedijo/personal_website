import { useRouteError } from "react-router-dom";
import {
  Box,
  Heading,
  VStack,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Center h={"100vh"}>
      <VStack>
        <Heading fontSize={64}>Oops</Heading>
        <Text fontSize={28}>
          Seems you've navigted to a page that does not exist
        </Text>
        <Box
          as="a"
          px={2}
          py={1}
          rounded={"md"}
          href={"/"}
          color={useColorModeValue("text.light", "text.dark")}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("primary.light", "primary.dark"),
            color: useColorModeValue("text.dark", "text.light"),
          }}
          fontSize={"lg"}
        >
          Head Back to Akinloluwa Adedijo's Website
        </Box>
        <p>
          <i>{error.statustext || error.message}</i>
        </p>
      </VStack>
    </Center>
  );
}
