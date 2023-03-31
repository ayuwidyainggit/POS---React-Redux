import { table } from '../../utils/table';

const initialState = {
  table: table,
  bookingTable: [],
};

// buat function untuk reducernya
const tableReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default tableReducer;
