import { table2 } from '../../utils/table';

const initialState = {
  table2: table2,
  bookingTable: [],
};

// buat function untuk reducernya
const tableReducer2 = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default tableReducer2;
