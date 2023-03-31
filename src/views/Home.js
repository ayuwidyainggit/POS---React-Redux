import React, { useState } from 'react';
import NavbarLeft from '../components/NavbarLeft';
import NavbarTop from '../components/NavbarTop';
import OrderList from '../components/OrderList';
import SelectTable from '../components/SelectTable';
import Table from '../components/Table';
import { useSelector } from 'react-redux';

const Home = () => {
  const tables = useSelector((state) => state.table.table);
  const tables2 = useSelector((state) => state.table2.table2);
  const [guess, setGuess] = useState();
  const [idtable, setIdTable] = useState();
  const [oneFloor, setOneFloor] = useState(true);
  const [twoFloor, setTwoFloor] = useState(false);

  const addTable = (name, guess) => {
    setGuess(guess);
    setIdTable(name);
  };

  const firstFloor = () => {
    setTwoFloor(false);
    setOneFloor(true);
    console.log('first floor oke');
  };

  const secondFloor = () => {
    setOneFloor(false);
    setTwoFloor(true);
    console.log('second floor oke');
  };
  return (
    <div>
      <div className="">
        <NavbarTop />
        <div className="top-24 relative flex">
          <div className="w-[8%] ">
            <NavbarLeft />
          </div>
          <div className="w-[67%] border-r border-neutral-600 h-[100vh]">
            <div className="relative flex justify-between border-b border-dotted border-sky-900 w-[98%] left-[1%] top-4 pb-4 items-center">
              <div className="relative w-[70%] ">
                <p>TABLE LIST</p>
              </div>
              <div className="relative w-[30%]  relative flex justify-between">
                <button onClick={() => firstFloor()} className="bg-[#D9D9D9] hover:bg-[#E8C5A3] w-[112px] h-[39px] rounded-md">
                  First Floor
                </button>
                <button onClick={() => secondFloor()} className="bg-[#D9D9D9] hover:bg-[#E8C5A3] w-[112px] h-[39px] rounded-md">
                  Second Floor
                </button>
              </div>
            </div>
            {oneFloor ? (
              <div className="relative flex justify-around grid grid-cols-3 gap-4 ">
                {tables.map((table) => (
                  <div onClick={() => addTable(table.name, table.guess)} key={table.id}>
                    <Table item={table} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative flex justify-around grid grid-cols-3 gap-4 ">
                {tables2.map((table) => (
                  <div onClick={() => addTable(table.name, table.guess)} key={table.id}>
                    <Table item={table} />
                  </div>
                ))}
              </div>
            )}

            <div className="relative flex justify-around grid grid-cols-3 gap-4 ">
              {tables.map((table) => (
                <div onClick={() => addTable(table.name, table.guess)} key={table.id}>
                  <Table item={table} />
                </div>
              ))}
            </div>
            <SelectTable table={idtable} guess={guess} />
          </div>
          <div className="w-[25%] ">
            <OrderList table={idtable} guess={guess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
