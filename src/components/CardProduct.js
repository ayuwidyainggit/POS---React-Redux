import React, { useState } from 'react';
import ayam from '../assets/content/ayam.jpeg';
import CalculateBox from './CalculateBox';
import { useSelector } from 'react-redux';
import { inc, dec, removeFromCard } from '../store/actions/product';
import { useDispatch } from 'react-redux';
import remove from '../assets/icon/remove.png';

const CardProduct = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  // const price = props.price;
  const [total, setTotal] = useState(props.price);
  // const [serviceCharge, setServiceCharge] = useState(10000);
  const carts = useSelector((state) => state.product.carts);
  const grandtotal = carts.reduce((totalPrice, current) => totalPrice + current.total, 0);
  console.log('grandtotal', grandtotal);
  console.log('price', total);

  const increment = (id) => {
    const price = props.price;
    setCount(count + 1);
    var x = total + price;
    setTotal(x);
    dispatch(inc(id));
    console.log(dispatch(inc(id)));
  };

  const decrement = (id, price) => {
    if (count <= 1) {
      alert('anda yakin ingin meremove item ini?');
      dispatch(removeFromCard(id));
    } else {
      const price = props.price;
      setCount(count - 1);
      var x = total - price;
      setTotal(x);
      dispatch(dec(id));
      console.log(dispatch(dec(id)));
    }
  };

  const removeItem = (id) => {
    alert('anda yakin ingin meremove item ini?');
    dispatch(removeFromCard(id));
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
            <button onClick={() => increment(props.id)} className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">+</p>
            </button>
            <p className="pl-2 pr-2">{count}</p>
            <button onClick={() => decrement(props.id)} className="bg-[#D89F65] rounded-xl w-3 h-3 mt-2">
              <p className=" relative -top-2">-</p>
            </button>
          </div>
        </div>
        <div className="w-[20%] pt-1 pr-4">
          <p>Total </p>
          <p>Rp{total}</p>
        </div>
        <div className="w-[10%] pt-1 pl-2">
          <img onClick={() => removeItem(props.id)} src={remove} alt="" srcset="" />
        </div>
      </div>

      <CalculateBox total={grandtotal} />
    </div>
  );
};

export default CardProduct;
