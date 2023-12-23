import { Box, Container, Heading } from "@chakra-ui/react";
import Page from "./Page";

const Contact = () => {
  return (
    <Page title="Contact">
      <Box as="section" pt={9}>
        <Container maxW="7xl">
          <Heading fontSize="2xl" textAlign="center">
            Contact Us
          </Heading>
        </Container>
      </Box>
    </Page>
  );
};

export default Contact;
