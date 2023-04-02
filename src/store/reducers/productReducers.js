import { product } from '../../utils/table';

const initialState = {
  product: product,
  selectProduct: [],
};

// buat function untuk reducernya
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
