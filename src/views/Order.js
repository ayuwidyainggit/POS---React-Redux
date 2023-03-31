import React from 'react';
import NavbarLeft from '../components/NavbarLeft';
import NavbarTop from '../components/NavbarTop';
import Productlist from '../components/Productlist';
import OrderList from '../components/OrderList';
import CardProduct from '../components/CardProduct';
import CategoryProduct from '../components/CategoryProduct';
import CalculateBox from '../components/CalculateBox';

const Order = () => {
  return (
    <div>
      <div className="">
        <NavbarTop />
        <div className="top-24 relative flex">
          <div className="w-[8%] ">
            <NavbarLeft />
          </div>
          <div className="w-[67%]">
            <Productlist />
            <CategoryProduct />
          </div>
          <div className="w-[25%] h-[100vh] border-l border-neutral-600">
            <OrderList />
            <CardProduct />
            <CalculateBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
