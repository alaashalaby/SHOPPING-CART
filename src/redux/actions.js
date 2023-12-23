export const setProducts = products => {
    return {
        type: 'SET_PRODUCTS',
        products,
    }
}

export const selectedProduct = product => {
    return {
        type: 'SELECTED_PRODUCT',
        product,
    }
}

export const addProduct = product => {
    return {
        type: "ADD_PRODUCT",
        product,
    }
}

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    id,
  };
};

export const increaseQuantity = id => {
    return {
        type: 'INCREASE_QUANTITY',
        id,
    }
}

export const decreaseQuantity = id => {
    return {
        type: 'DECREASE_QUANTITY',
        id,
    }
}
