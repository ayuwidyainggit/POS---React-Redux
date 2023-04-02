import React, { useState } from 'react';
import ayam from '../assets/content/ayam.jpeg';
import cabe from '../assets/icon/cabe.png';
import { useSelector } from 'react-redux';
import Home from '../views/Home';

const Productlist = () => {
  const product = useSelector((state) => state.product.product);
  const drinks = useSelector((state) => state.drinks.drinks);
  const dessert = useSelector((state) => state.dessert.dessert);
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
    console.log('food dpilih');
  };
  const selectDissert = () => {
    setDesserts(true);
    setFood(false);
    setDrink(false);
    console.log('dessert dpilih');
  };

  return (
    <div>
      {drink ? (
        <div className="top-8 relative flex grid grid-cols-4 gap-4 pr-5 pl-5">
          {drinks.map((product) => (
            <div key={product.id} className="bg-[#D8E6E9] w-[180px] h-[200px] rounded-xl">
              <div>
                <img src={ayam} alt="" className="w-[180px] rounded-t-xl" />
              </div>
              <div>
                <p>{product.name}</p>
                <div className="relative flex  justify-between">
                  <div className="w-[50%] ">
                    <p>Category: </p>
                  </div>
                  <div className="w-[50%]  relative flex justify-around">
                    <div className="bg-[#E0B284] w-[23px] h-[23px] rounded-xl ">
                      <p className="relative left-[25%]">{product.category_code}</p>
                    </div>
                    <div className="relative flex items-center">
                      <img src={cabe} alt="" className="w-[20px] h-[17px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : food ? (
        <div className="top-8 relative flex grid grid-cols-4 gap-4 pr-5 pl-5">
          {product.map((product) => (
            <div key={product.id} className="bg-[#D8E6E9] w-[180px] h-[200px] rounded-xl">
              <div>
                <img src={ayam} alt="" className="w-[180px] rounded-t-xl" />
              </div>
              <div>
                <p>{product.name}</p>
                <div className="relative flex  justify-between">
                  <div className="w-[50%] ">
                    <p>Category: </p>
                  </div>
                  <div className="w-[50%]  relative flex justify-around">
                    <div className="bg-[#E0B284] w-[23px] h-[23px] rounded-xl ">
                      <p className="relative left-[25%]">{product.category_code}</p>
                    </div>
                    <div className="relative flex items-center">
                      <img src={cabe} alt="" className="w-[20px] h-[17px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="top-8 relative flex grid grid-cols-4 gap-4 pr-5 pl-5">
          {dessert.map((product) => (
            <div key={product.id} className="bg-[#D8E6E9] w-[180px] h-[200px] rounded-xl">
              <div>
                <img src={ayam} alt="" className="w-[180px] rounded-t-xl" />
              </div>
              <div>
                <p>{product.name}</p>
                <div className="relative flex  justify-between">
                  <div className="w-[50%] ">
                    <p>Category: </p>
                  </div>
                  <div className="w-[50%]  relative flex justify-around">
                    <div className="bg-[#E0B284] w-[23px] h-[23px] rounded-xl ">
                      <p className="relative left-[25%]">{product.category_code}</p>
                    </div>
                    <div className="relative flex items-center">
                      <img src={cabe} alt="" className="w-[20px] h-[17px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
