import React from 'react';

const PaymentAmount = () => {
  return (
    <div>
      <p className="w-[95%] relative left-[2.5%]">PAYABLE AMOUNT</p>
      <div className="w-[95%] h-[87px] items-center relative left-[2.5%] flex justify-between  border-dotted border-b-2 border-[#8BB5BE]">
        <p>$38</p>
        <p>Guess : 2 </p>
      </div>
      <div className="w-[95%] h-[87px] items-center relative left-[2.5%] flex border-dotted border-b-2 border-[#8BB5BE] justify-around">
        <div className="w-[90px] h-[78px] bg-[#EAF0F0] hover:bg-[#8BB5BE]  relative items-center rounded-md ">
          <p className="text-center pt-[25%]">CASH</p>
        </div>
        <div className="w-[90px] h-[78px] bg-[#EAF0F0] hover:bg-[#8BB5BE]  relative items-center rounded-md ">
          <p className="text-center pt-[25%]">CARD</p>
        </div>
        <div className="w-[90px] h-[78px] bg-[#EAF0F0] hover:bg-[#8BB5BE]  relative items-center rounded-md ">
          <p className="text-center pt-[25%]">VOUCHER</p>
        </div>
      </div>

      <div className="w-[95%] h-[87px] items-center relative left-[2.5%] flex border-dotted border-b-2 border-[#8BB5BE] bg-[#EAF0F0] justify-around">
        <p>ADD CASH RECEIVED</p>
        <p>$45</p>
      </div>
      <div className="w-[95%] h-[87px] items-center relative left-[2.5%]  border-dotted border-b-2 border-[#8BB5BE] ">
        <div className="relative flex justify-between">
          <p>Subtotal</p>
          <p>$35</p>
        </div>
        <div className="relative flex justify-between">
          <p>Tips</p>
          <p>$5</p>
        </div>
        <div className="relative flex justify-between">
          <p>Service Charge 10%</p>
          <p>$3.5</p>
        </div>
      </div>

      <div className="w-[95%] h-[87px] items-center relative left-[2.5%]  border-dotted border-b-2 border-[#8BB5BE] ">
        <div className="relative flex justify-between top-[35%]">
          <p>TOTAL</p>
          <p>$43.5</p>
        </div>
      </div>
      <button className="w-[95%] relative left-[2.5%] bg-[#ECF3F5] hover:bg-[#8BB5BE] h-[67px] top-4 rounded-md">PAY NOW</button>
    </div>
  );
};

export default PaymentAmount;
