import { dessert } from '../../utils/table';

const initialState = {
  dessert: dessert,
  selectDessert: [],
};

// buat function untuk reducernya
const dessertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default dessertReducer;
