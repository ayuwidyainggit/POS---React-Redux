import React from 'react';
import people from '../assets/icon/people.png';
import table from '../assets/icon/small table icon.png';

const OrderList = (props) => {
  return (
    <div>
      <div className="w-[90%]  relative left-[5%] mb-4">
        <div className="relative flex justify-between pt-3">
          <p>ORDER #</p>
          <p>123456</p>
        </div>
        <div className="relative flex justify-between  pb-4 border-dashed border-b-2 border-indigo-600 ">
          <div className="relative flex justify-start   w-[50%] items-center ">
            <img src={people} alt="" className="w-[20px] h-[20px] mt-1" />
            <p className="pl-2">
              GUEST : <span className="text-[#D89F65] text-xl">{props.guess}</span>
            </p>
          </div>

          <div className="relative flex  w-[50%] justify-end items-center">
            <img src={table} alt="" className="w-[20px] h-[20px] mt-1" />
            <p className="pl-2">
              TABLE : <span className="text-[#D89F65] text-xl">{props.table}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
