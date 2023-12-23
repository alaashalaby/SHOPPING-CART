import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Container,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  addProduct, selectedProduct } from "../redux/actions";
import Page from "./Page";

const Product = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductReducer);
  const toast = useToast();
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(selectedProduct(response.data));
    };
    getProduct();
  }, [id, dispatch]);
  
  const handleClick = () => {
    dispatch(addProduct(product));
        toast({
          position: "top-right",
          title: "Added To Cart",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
  }
  return (
    <Page title="Product">
      <Box as="section" py={10}>
        <Container maxW="7xl">
          <SimpleGrid columns={[1,2]} spacing={4} alignItems="center">
            <Box>
              <Image
                src={product.image}
                alt={product.title}
                width={[200,350]}
                mx="auto"
              />
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl" mb={4} color="teal.500">
                {product.title}
              </Heading>
              <Text noOfLines={4} mb={4}>
                {product.description}
              </Text>
              <Text mb={4} fontWeight="bold" textTransform="capitalize">
                Category: {product.category}
              </Text>
              <Text mb={4} fontWeight="bold">
                Price: {product.price}$
              </Text>
              <Button colorScheme="teal" onClick={handleClick}>
                Add To Cart
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Page>
  );
};

export default Product;
