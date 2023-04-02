import React from 'react';

const Food = () => {
  const product = useSelector((state) => state.product.product);
  return (
    <div>
      <div className="top-8 relative flex grid grid-cols-4 gap-4 pr-5 pl-5">
        {product.map((product) => (
          <div key={product.id} className="bg-[#D8E6E9] w-[180px] h-[200px] rounded-xl">
            <div>
              <img src={ayam} alt="" className="w-[180px] rounded-t-xl" />
            </div>
            <div>
              <p>{product.name}</p>
              <div className="relative flex  justify-between">
                <div className="w-[50%] ">
                  <p>Category: </p>
                </div>
                <div className="w-[50%]  relative flex justify-around">
                  <div className="bg-[#E0B284] w-[23px] h-[23px] rounded-xl ">
                    <p className="relative left-[25%]">{product.category_code}</p>
                  </div>
                  <div className="relative flex items-center">
                    <img src={cabe} alt="" className="w-[20px] h-[17px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
