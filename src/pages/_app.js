import { Credits } from "@/components/Credits";
import { Navbar } from "@/components/Navbar";
import { ChakraProvider, Flex, Stack } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex
        justifyContent="center"
        bg="gray.200"
        width="100vw"
        height="100vh"
        flexDirection="column"
      >
        <Stack
          direction="row"
          bgColor="gray.50"
          p={4}
          borderRadius="20px"
          width={"70vw"}
          margin="auto"
          // height="90vh"
          // mt="5vh"
        >
          {/* <Navbar /> */}
          <Component {...pageProps} />
        </Stack>
        <Credits />
      </Flex>
    </ChakraProvider>
  );
}
