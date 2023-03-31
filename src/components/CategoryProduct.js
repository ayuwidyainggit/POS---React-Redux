import React from 'react';

const CategoryProduct = () => {
  return (
    <div>
      <div className="bg-[#EAF0F0] fixed  w-[67%] flex z-0 h-[100px] justify-evenly items-center bottom-0 ">
        <button className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">DRINKS</button>
        <button className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">FOOD</button>
        <button className="bg-[#D9D9D9] h-[58px] w-[195px] rounded-md hover:bg-[#D89F65]">Dessert</button>
      </div>
    </div>
  );
};

export default CategoryProduct;
