import { drinks } from '../../utils/table';

const initialState = {
  drinks: drinks,
  selectDrinks: [],
};

// buat function untuk reducernya
const drinksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default drinksReducer;
