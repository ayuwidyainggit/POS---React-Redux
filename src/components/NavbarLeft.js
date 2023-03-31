import React from 'react';
import home from '../assets/icon/home.png';
import menu from '../assets/icon/menu.png';
import payment from '../assets/icon/payment.png';
import order from '../assets/icon/order.png';
import setting from '../assets/icon/setting.png';
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className="fixed left-0 w-[8%] border-r border-neutral-600 h-[100%]">
      <Link to={'/'}>
        <div className=" relative text-center top-[30px] pb-[40px]">
          <div className="relative flex justify-center">
            <img src={home} alt="" />
          </div>
          <p>HOME</p>
        </div>
      </Link>

      <div className="relative text-center top-[30px] pb-[40px]">
        <div className="relative flex justify-center">
          <img src={menu} alt="" />
        </div>
        <p>MENU</p>
      </div>
      <div className=" relative text-center top-[30px] pb-[40px]">
        <div className="relative flex justify-center">
          <img src={payment} alt="" />
        </div>
        <p>PAYMENT</p>
      </div>
      <div className="relative text-center top-[30px] pb-[40px]">
        <div className="relative flex justify-center">
          <img src={order} alt="" />
        </div>
        <p>ORDERS</p>
      </div>
      <div className="relative text-center top-[30px] pb-[40px]">
        <div className="relative flex justify-center">
          <img src={setting} alt="" />
        </div>
        <p>SETTING</p>
      </div>
    </div>
  );
};

export default NavbarLeft;
