export const addcart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: id,
  };
};

export const inc = (id) => {
  return {
    type: 'INCREMENT',
    payload: id,
  };
};

export const dec = (id) => {
  return {
    type: 'DECREMENT',
    payload: id,
  };
};

export const removeFromCard = (id) => {
  return {
    type: 'REMOVE',
    payload: id,
  };
};

export const removeAllFromCard = (id) => {
  return {
    type: 'REMOVEALL',
    payload: id,
  };
};

export const resetCard = () => {
  return {
    type: 'RESET',
  };
};

export const addOrder = () => {
  return {
    type: 'ADD_ORDER',
  };
};
