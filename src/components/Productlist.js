import React, { useState } from 'react';
import Drink from './Drink';
import Food from './Food';
import Dessert from './Dessert';

const Productlist = () => {
  const [drink, setDrink] = useState(true);
  const [food, setFood] = useState(false);
  const [desserts, setDesserts] = useState(false);

  const selectDrink = () => {
    console.log('drinks dpilih');
    setDesserts(false);
    setFood(false);
    setDrink(true);
  };

  const selectFood = () => {
    setDrink(false);
    setDesserts(false);
    setFood(true);
  };

  const selectDissert = () => {
    setDesserts(true);
    setFood(false);
    setDrink(false);
  };

  return (
    <div>
      {drink ? <Drink /> : food ? <Food /> : <Dessert />}

      <div className="bg-[#EAF0F0] fixed  w-[67%] flex z-0 h-[100px] justify-evenly items-center bottom-0 ">
        <button onClick={() => selectDrink()} className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">
          DRINKS
        </button>
        <button onClick={() => selectFood()} className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">
          FOOD
        </button>
        <button onClick={() => selectDissert()} className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">
          Dessert
        </button>
      </div>
    </div>
  );
};

export default Productlist;
