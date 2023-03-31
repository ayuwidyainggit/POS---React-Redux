import React from 'react';
import NavbarLeft from '../components/NavbarLeft';
import NavbarTop from '../components/NavbarTop';
import ListOrder from '../components/ListOrder';
import PaymentAmount from '../components/PaymentAmount';

const Payment = () => {
  return (
    <div>
      <div className="">
        <NavbarTop />
        <div className="top-24 relative flex">
          <div className="w-[8%] ">
            <NavbarLeft />
          </div>
          <div className="w-[67%]">
            <ListOrder />
          </div>
          <div className="w-[25%] h-[100vh] border-l border-neutral-600">
            <PaymentAmount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
