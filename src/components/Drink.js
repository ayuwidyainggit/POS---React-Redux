import React from 'react';

const Drink = () => {
  const drinks = useSelector((state) => state.drinks.drinks);
  return <div>Drink</div>;
};

export default Drink;
