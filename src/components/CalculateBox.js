import React, { useEffect, useState } from 'react';

const CalculateBox = (props) => {
  const [totalSemua, setTotalSemua] = useState();
  const total = props.total;

  const service = props.service;

  const grandTotal = () => {
    setTotalSemua(total + service);
  };

  useEffect(() => {
    grandTotal();
  }, [grandTotal]);
  return (
    <div>
      <div className=" w-[23%] fixed right-3 mt-[45%]  border-dashed border-2 border-sky-600 bottom-0 rounded-t-md bg-white">
        <div className="relative flex justify-between">
          <p>SUBTOTAL</p>
          <p> {props.total}</p>
        </div>
        <div className="relative flex justify-between border-b border-dotted border-sky-600">
          <p>Service Charge 10%</p>
          <p>Rp {props.service}</p>
        </div>
        <div className="relative flex justify-between">
          <p>TOTAL</p>
          <p>Rp {totalSemua}</p>
        </div>
        <div className=" flex justify-around ">
          <button className="bg-red-300 hover:bg-[#EC5A5A] w-[120px] h-[48px] rounded-md">CANCEL </button>
          <button className="bg-[#B1CED4] hover:bg-[#68cde1] w-[120px] h-[48px] rounded-md">SEND </button>
        </div>
      </div>
    </div>
  );
};

export default CalculateBox;
