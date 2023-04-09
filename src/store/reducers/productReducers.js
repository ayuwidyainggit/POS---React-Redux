import { product } from '../../utils/table';

const initialState = {
  product: product,
  carts: [],
};

// buat function untuk reducernya
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case 'ADD_TO_CART':
      const itemInCart = state.carts.find((product) => product.id === payload);
      const newItemCart = [state.product.find((product) => product.id === payload)];

      if (!itemInCart) {
        return {
          ...state,
          carts: [...state.carts, ...newItemCart],
        };
      } else {
        return state;
      }
    case 'INCREMENT':
      const originalPrice = state.product.find((product) => product.id === payload).price;
      const incCarts = state.carts.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            price: product.price + originalPrice,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        carts: incCarts,
      };
  }
};

export default productReducer;
