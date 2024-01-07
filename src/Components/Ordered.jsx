
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Ordered = ({
  item,
  removeItemCart,
  totalCost,
  setTotalCost,
  cartItems,
}) => {
  const { id, imgUrl, productName, productPrice } = item;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, object) => {
      return acc + object.productPrice;
    }, 0);
    setTotalCost(totalPrice);
  }, [cartItems, setTotalCost]);

  useEffect(() => {
    // alert('quntity update');
  }, [quantity]);

  const handleQuantity = (value) => {
    if (value === "-") {
      if (quantity === 1) {
        removeItemCart(id);
        setTotalCost(totalCost - productPrice);
      } else {
        setQuantity((prevQuantity) => prevQuantity - 1);
        setTotalCost(totalCost - productPrice);
      }
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setTotalCost(totalCost + productPrice);
    }
  };

  return (
    <div className="flex justify-between items-center ">
      <div className="w-[90px] h-[90px]">
        <img className="w-full h-full rounded-full" src={imgUrl} alt="" />
      </div>
      <div className="w-[200px] ">
        <h4 className="text-2xl font-semibold">{productName}</h4>
        <p>{productPrice} Tk.</p>
      </div>
      <div className="flex">
        <div
          onClick={() => handleQuantity("-")}
          className="w-[46px] h-[35px]  flex justify-center items-center cursor-pointer"
        >
          <p>-</p>
        </div>
        <div className="w-[46px] h-[35px] bg-[#fff] flex justify-center items-center cursor-pointer">
          <p>{quantity}</p>
        </div>
        <div
          onClick={() => handleQuantity("+")}
          className="w-[46px] h-[35px] flex justify-center items-center cursor-pointer"
        >
          <p>+</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => removeItemCart(id)}>
        <MdDelete fontSize={20} />
      </div>
    </div>
  );
};

export default Ordered;
