import React, { useState } from 'react';
import table from '../assets/content/table.png';

const Table = ({ item }) => {
  return (
    <div>
      <div className="relative flex items-center cursor-pointer">
        <img src={table} alt="" className="relative left-[10%]" />
        <p className={!item.status ? 'text-center relative right-[27%] cursor-pointer' : 'text-center relative right-[27%] cursor-pointer text-[RED]'}>{item.name}</p>
      </div>
    </div>
  );
};

export default Table;
