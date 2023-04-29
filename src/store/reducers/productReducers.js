import { product } from '../../utils/table';

const initialState = {
  product: product,
  carts: [],
  orders: [],
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
      const total = state.product.find((product) => product.id === payload).total;
      console.log('originalPrice', originalPrice);
      console.log('total', total);
      const incCarts = state.carts.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            total: product.total + originalPrice - originalPrice / 2,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        carts: incCarts,
      };

    case 'DECREMENT':
      const oriPrice = state.product.find((product) => product.id === payload).price;
      const decCarts = state.carts.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            total: product.total - oriPrice + oriPrice / 2,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        carts: decCarts,
      };

    case 'REMOVE':
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };
    case 'REMOVEALL':
      return {};
    case 'RESET':
      return {
        ...state,
        carts: [],
      };
  }
};

export default productReducer;
