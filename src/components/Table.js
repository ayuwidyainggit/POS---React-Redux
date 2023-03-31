import React from 'react';
import table from '../assets/content/table.png';

const Table = ({ item }) => {
  return (
    <div>
      <div className="relative flex items-center">
        <img src={table} alt="" className="relative left-[10%]" />
        <p className="text-center relative right-[27%] ">{item.name}</p>
      </div>
    </div>
  );
};

export default Table;
