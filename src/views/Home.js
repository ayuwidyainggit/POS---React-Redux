import React, { useState } from 'react';
import NavbarLeft from '../components/NavbarLeft';
import NavbarTop from '../components/NavbarTop';
import OrderList from '../components/OrderList';
import SelectTable from '../components/SelectTable';
import Table from '../components/Table';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Productlist from '../components/Productlist';
import CategoryProduct from '../components/CategoryProduct';
import CardProduct from '../components/CardProduct';

const Home = () => {
  const tables = useSelector((state) => state.table.table);
  const tables2 = useSelector((state) => state.table2.table2);
  const carts = useSelector((state) => state.product.carts);
  const [guess, setGuess] = useState();
  const [idtable, setIdTable] = useState();
  const [namatable, setNamaTable] = useState();
  const [oneFloor, setOneFloor] = useState(true);
  const [twoFloor, setTwoFloor] = useState(false);
  const [selectTable, setSelectTable] = useState(false);
  const [bookingTable, setBookingTable] = useState();
  const [chooseTable, setChooseTable] = useState(false);

  const { id } = useParams();

  const addTable = (name, guess, status) => {
    setChooseTable(true);
    setGuess(guess);
    setNamaTable(name);
    setIdTable(id);
    setBookingTable(status);
    console.log(status);
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

  // function ketika di klik select dan continue
  const selectAndContinue = () => {
    if (!chooseTable) {
      alert('Silahkan pilih meja terlebih dahulu :)');
    } else if (bookingTable) {
      alert('sudah di booking');
    } else {
      setSelectTable(true);
      console.log('second table oke');
    }
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
            {selectTable ? (
              <div>
                <Productlist />
              </div>
            ) : (
              <div>
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
                      <div onClick={() => addTable(table.guess, table.name, table.status)} key={table.id}>
                        <Table item={table} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative flex justify-around grid grid-cols-3 gap-4 ">
                    {tables2.map((table) => (
                      <div onClick={() => addTable(table.guess, table.name, table.status)} key={table.id}>
                        <Table item={table} />
                      </div>
                    ))}
                  </div>
                )}
                ;
              </div>
            )}

            {/* <SelectTable table={namatable} guess={guess} /> */}
            {/* gajadi karena blum tau cara ngirim data dr child ke parentnya */}

            {selectTable ? (
              <div></div>
            ) : (
              <div className="bg-[#EAF0F0] fixed  w-[67%] flex z-0 h-[100px] justify-evenly items-center bottom-0 ">
                <div className="w-[30%] relative flex justify-start pl-4">
                  <div className="w-[50%] flex relative justify-start">
                    <p>
                      Table : <span className="text-[#E8C5A3]">{namatable}</span>
                    </p>
                  </div>
                  <div className="w-[50%] flex relative justify-start">
                    <p>
                      Guess : <span className="text-[#E8C5A3]">{guess}</span>
                    </p>
                  </div>
                </div>
                <div className="w-[70%] relative flex justify-end pr-4">
                  <button onClick={() => selectAndContinue()} table={namatable} className="bg-[#D9D9D9] h-[58px] w-[268px] rounded-md hover:bg-[#4A5C2F] hover:text-[#FFFFFF]">
                    Select and Continue
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="w-[25%] ">
            <OrderList table={namatable} guess={guess} idTable={idtable} />
            {carts.map((item) => (
              <CardProduct key={item.id} name={item.name} price={item.price} id={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
