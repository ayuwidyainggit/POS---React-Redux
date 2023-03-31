import React from 'react';
import ayam from '../assets/content/ayam.jpeg';

const CardProduct = () => {
  return (
    <div>
      <div className="bg-[#EAF0F0] w-[90%]  relative flex left-[5%] rounded-md top-4 h-[84px] mb-3">
        <div className="w-[30%] relative flex justify-center items-center ">
          <img src={ayam} alt="" className="rounded-md w-[65px] h-[63px]" />
        </div>
        <div className="w-[40%] text-left pt-1">
          <p>Chicken Wings</p>
          <p>$30</p>
          <div className="relative flex justify-left">
            <button className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">-</p>
            </button>
            <p className="pl-2 pr-2">0</p>
            <button className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">+</p>
            </button>
          </div>
        </div>
        <div className="w-[30%] pt-1">
          <p>Quantity</p>
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
