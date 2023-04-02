import React from 'react';

const Dessert = () => {
  const dessert = useSelector((state) => state.dessert.dessert);
  return <div>Dessert</div>;
};

export default Dessert;
