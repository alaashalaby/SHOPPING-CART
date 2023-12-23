import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { BiSolidTrash, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {decreaseQuantity, increaseQuantity, removeProduct } from "../redux/actions";
import Page from "./Page";
const Cart = () => {
  const product = useSelector((state) => state.cartReducer.item);
  const dispatch = useDispatch();

  return (
    <Page title="Cart">
      <Box as="section" pt={9}>
        <Container maxW="7xl">
          {product.length === 0 ? (
            <Heading fontSize="2xl" textAlign="center">
              Your Cart Is Empty!!
            </Heading>
          ) : (
            <>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Product Image</Th>
                      <Th textAlign="center">Title</Th>
                      <Th textAlign="center">Quantity</Th>
                      <Th textAlign="center">Price</Th>
                      <Th textAlign="center">Total price</Th>
                      <Th textAlign="center">Action</Th>
                    </Tr>
                  </Thead>
                  {product.map((item) => (
                    <Tbody key={item.id}>
                      <Tr>
                        <Td>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={100}
                            height={100}
                          />
                        </Td>
                        <Td>
                          <Heading fontSize="xl" color="teal.500" noOfLines={1}>
                            {item.title}
                          </Heading>
                        </Td>
                        <Td>
                          <Flex alignItems="center" gap={2}>
                            <Button
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              <BiMinus />
                            </Button>
                            <Text>{item.quantity}</Text>
                            <Button
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              <BiPlus />
                            </Button>
                          </Flex>
                        </Td>
                        <Td>
                          <Text fontWeight="bold">$ {item.price}</Text>
                        </Td>
                        <Td>
                          <Text
                            fontSize="xl"
                            textTransform="capitalize"
                            fontWeight="bold"
                            color="teal.700"
                          >
                            $ {Math.round(`${item.quantity * item.price}`)}
                          </Text>
                        </Td>
                        <Td>
                          <Button
                            variant="none"
                            fontSize="xl"
                            color="red"
                            onClick={() => dispatch(removeProduct(item.id))}
                          >
                            <BiSolidTrash />
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  ))}
                </Table>
              </TableContainer>
            </>
          )}
        </Container>
      </Box>
    </Page>
  );
};

export default Cart;