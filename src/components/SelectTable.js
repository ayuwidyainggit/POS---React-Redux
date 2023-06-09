import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectTable = (props) => {
  const [namatable, setNamaTable] = useState();

  const addTable = () => {
    setNamaTable(props.table);
    console.log(props.table);
  };
  return (
    <div>
      <div className="bg-[#EAF0F0] fixed  w-[67%] flex z-0 h-[100px] justify-evenly items-center bottom-0 ">
        <div className="w-[30%] relative flex justify-start pl-4">
          <div className="w-[50%] flex relative justify-start">
            <p>
              Table : <span className="text-[#E8C5A3]">{props.table}</span>
            </p>
          </div>
          <div className="w-[50%] flex relative justify-start">
            <p>
              Guess : <span className="text-[#E8C5A3]">{props.guess}</span>
            </p>
          </div>
        </div>
        <div className="w-[70%] relative flex justify-end pr-4">
          <Link to="/order">
            <button onClick={() => addTable()} table={namatable} className="bg-[#D9D9D9] h-[58px] w-[268px] rounded-md hover:bg-[#4A5C2F] hover:text-[#FFFFFF]">
              Select and Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectTable;
