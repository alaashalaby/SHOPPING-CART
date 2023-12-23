import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCart, BiX, BiMenu, BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const state = useSelector((state) => state.cartReducer.item);
  const[isOpen,setIsOpen]=useState(false)
  return (
    <Box as="header" pt={5} pb={5} shadow="md">
      <Container maxW="7xl">
        <HStack justifyContent="space-between" alignItems="center" pos={"relative"}>
          <Heading fontSize="2xl">Store</Heading>
          <Box as="nav">
            <List
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
              gap={9}
            >
              <ListItem>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="/products">Products</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
          </Box>
          <Flex>
            <Link to="/cart">
              <Button variant="none" fontSize="2xl" position="relative">
                <BiCart />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: "5px",
                    backgroundColor: " #333",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  {state.length}
                </span>
              </Button>
            </Link>
            <Button
              variant="none"
              fontSize="3xl"
              display={{ base: "block", md: "none" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <BiX /> : <BiMenu />}
            </Button>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
