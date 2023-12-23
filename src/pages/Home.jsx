import { Box, Container, Heading } from "@chakra-ui/react";
import Page from "./Page";

const Home = () => {
  return (
    <Page title="Home">
      <Box as="section" pt={9}>
        <Container maxW="7xl">
          <Heading fontSize="2xl" textAlign="center">
            Home page
          </Heading>
        </Container>
      </Box>
    </Page>
  );
};

export default Home;
