import React, { useState, useEffect } from 'react';
import search from '../assets/icon/search.png';
import calender from '../assets/icon/calendar.png';

const NavbarTop = () => {
  const [date, setDate] = useState(new Date());
  // the initial states of date is set to the current date. However, this value won’t change as the time and date changes, and will stay constant as to when the component was first rendered

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    // our date state (rhyme-time) is set at an interval, every 1000ms (1s)
    return function cleanup() {
      clearInterval(timer);
    };
    // The clean up function is there to reset the whole process and avoid any memory leaks
  });

  let dates = date.toLocaleDateString();
  // let d = dates.getDate();
  // let mm = dates.getMonth();
  // let yyyy = dates.getYear();
  // const currentDate = `${d} / ${mm}/ ${yyyy}`;

  return (
    <div className="navbar-fixed">
      <div className=" w-[555px] h-[58px] relative flex left-[32px] justify-between">
        <h1 className="font-bold ">
          <span className="font-bold text-[45px] leading-[56px] top-[1px] text-[#3D8493]" style={{ fontFamily: 'Quicksand' }}>
            P
          </span>
          <span className="font-bold text-[45px] leading-[56px] top-[1px] text-[#D89F65]" style={{ fontFamily: 'Quicksand' }}>
            O
          </span>
          <span className="font-bold text-[45px] leading-[56px] top-[1px] text-[#4A5C2F]" style={{ fontFamily: 'Quicksand' }}>
            S
          </span>
        </h1>
        <div className="relative flex items-center w-[375px] h-[58px] ">
          <input
            type="text"
            style={{ fontFamily: 'Quicksand' }}
            className="relative bg-[#ECF3F5] w-[100%] h-[58px] left-[5.5%] rounded-[10px] pl-[25px]  font-thin text-[15px] text-[#89928E
]"
            placeholder="Search product or any order..."
          />
          <img src={search} alt="" className=" relative w-[21.86px] h-[21.86px] right-[14.04%] z-10 " />
        </div>
      </div>
      <div className=" w-[419px] h-[58px] relative flex right-[32px] justify-between items-center">
        <div className=" w-[223px] h-[22px] relative flex justify-between">
          <img src={calender} alt="" className="relative w-[16px] h-[18px] left-[9px] " />
          <p className=" text-[14px] font-sans">
            <span className=" relative right-14">{dates},</span>
            <span className=" relative right-12">{date.toLocaleTimeString()}</span>
          </p>
        </div>
        <div className="">
          <button className="w-[175px] h-[58px] bg-[#B1CED4] rounded-[10px] text-[16px]" style={{ fontWeight: '200', fontFamily: 'Quicksand' }}>
            ADD TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
