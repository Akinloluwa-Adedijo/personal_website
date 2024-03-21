import { useRouteError } from "react-router-dom";
import { Box, Heading, Center, Text } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box h={"100%"} w={"100%"}>
      <Center>
        <Heading>Oops</Heading>
        <Text>Seems you've navigted to a page that does not exist</Text>
        <p>
          <i>{error.statustext || error.message}</i>
        </p>
      </Center>
    </Box>
  );
}
