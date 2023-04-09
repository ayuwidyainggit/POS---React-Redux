import React, { useState } from 'react';
import ayam from '../assets/content/ayam.jpeg';
import CalculateBox from './CalculateBox';
import { useSelector } from 'react-redux';
import { inc, dec } from '../store/actions/product';
import { useDispatch } from 'react-redux';

const CardProduct = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const price = props.price;
  const [total, setTotal] = useState(price);
  const [serviceCharge, setServiceCharge] = useState(10000);
  const carts = useSelector((state) => state.product.carts);
  const grandtotal = carts.reduce((totalPrice, current) => totalPrice + current.price, 0);

  const increment = (id) => {
    const price = props.price;
    setCount(count + 1);
    var x = price + count * price;
    setTotal(x);
    dispatch(inc(id));
  };

  const decrement = (id, price) => {
    if (count <= 1) {
      alert('gabisa');
    } else {
      const price = props.price;
      setCount(count - 1);
      var x = total - price;
      setTotal(x);
      dispatch(dec(id));
    }
  };

  return (
    <div>
      <div className="bg-[#EAF0F0] w-[90%]  relative flex left-[5%] rounded-md top-4 h-[84px] mb-3">
        <div className="w-[30%] relative flex justify-center items-center ">
          <img src={ayam} alt="" className="rounded-md w-[65px] h-[63px]" />
        </div>
        <div className="w-[40%] text-left pt-1">
          <p>{props.name}</p>
          <p>Rp {props.price}</p>
          <div className="relative flex justify-left">
            <button onClick={() => increment(props.price)} className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">+</p>
            </button>
            <p className="pl-2 pr-2">{count}</p>
            <button onClick={() => decrement()} className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">-</p>
            </button>
          </div>
        </div>
        <div className="w-[30%] pt-1">
          <p>Total Harga</p>
          <p>Rp{total}</p>
        </div>
      </div>

      <CalculateBox service={serviceCharge} total={grandtotal} />
    </div>
  );
};

export default CardProduct;
