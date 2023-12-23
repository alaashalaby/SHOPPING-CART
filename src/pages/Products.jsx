import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from '../redux/actions';
import Page from "./Page";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    };
    getProducts();
  }, [dispatch]);
  return (
    <Page title="Products">
      <Box as="main" pt={9}>
        <Container maxW="7xl">
          <Heading as="h3" fontSize="3xl" textAlign="center" mb={7}>
            Our Products
          </Heading>
          <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={5}>
            {products.map((product) => (
              <LinkBox
                shadow="md"
                p={5}
                borderRadius={8}
                textAlign="center"
                key={product.id}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  mx="auto"
                  mb={6}
                />
                <Heading as="h4" fontSize="lg" noOfLines={1} mb={4}>
                  {product.title}
                </Heading>
                <Text noOfLines={3} mb={4}>
                  {product.description}
                </Text>
                <LinkOverlay as={RouterLink} to={`/products/${product.id}`}>
                  <Button colorScheme="teal">Buy Now</Button>
                </LinkOverlay>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Page>
  );
};

export default Products;
