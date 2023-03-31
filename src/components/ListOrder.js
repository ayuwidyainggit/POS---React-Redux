import React from 'react';
import remove from '../assets/icon/remove.png';

const ListOrder = () => {
  return (
    <div>
      <div className="relative flex justify-between w-[95%] left-[2.5%] top-4 mb-4">
        <div className="w-[30%]">
          <p>ORDER # : 1234</p>
        </div>
        <div className=" w-[60%] relative flex justify-end">
          <p className="mr-8">
            Table : <span className="text-[#D89F65]">1</span>
          </p>
          <p>
            Time : <span className="text-[#D89F65]">20:02</span>
          </p>
        </div>
      </div>
      <div className="relative  justify-center top-4 w-[95%] left-[2.5%]">
        <table class="border border-[#EAF0F0] rounded-md">
          <thead>
            <tr>
              <th className=" bg-[#EAF0F0] w-[774px] h-[51px]"> ITEM</th>
              <th className=" bg-[#EAF0F0] w-[774px] h-[51px]">PRICE</th>
              <th className=" bg-[#EAF0F0] w-[774px] h-[51px]">QTY</th>
              <th className=" bg-[#EAF0F0] w-[774px] h-[51px]">SUBTOTAL</th>
              <th className=" bg-[#EAF0F0] w-[374px] h-[51px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[774px] h-[50%] border-b border-[#EAF0F0] bg-[#FAFAFA]">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="w-[774px] h-[50%] border-b border-[#EAF0F0] text-center bg-[#FAFAFA]">Malcolm Lockyer</td>
              <td className="w-[774px] h-[50%] border-b border-[#EAF0F0] text-center bg-[#FAFAFA]">1961</td>
              <td className="w-[774px] h-[50%] border-b border-[#EAF0F0] text-center bg-[#FAFAFA]">1961</td>
              <td className="w-[374px] h-[50%] border-b border-[#EAF0F0] text-center bg-[#FAFAFA]">
                <img src={remove} alt="" srcset="" />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="relative bg-[#EC5A5A] w-[100%]  h-[75px] top-8 rounded-md">CANCEL ORDER</button>
      </div>
    </div>
  );
};

export default ListOrder;
