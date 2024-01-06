import React from "react";
import { AiFillLike } from "react-icons/ai";


const FoodCard = ({item}) => {
  const {imgUrl,productName,productPrice} = item;
  return (
    <div className="bg-[#fff] w-[230px] p-2.5 rounded-md mt-10">
      <div className="h-[200px] rounded-sm">
        <img className="w-full h-full rounded-md" src={imgUrl} alt="" />
      </div>

      <div className="mt-2 flex justify-between items-center">
        <h1 className="app_food_card_itemName">{productName}</h1>
        <AiFillLike color='#0C0B0B' />

      </div>
      <div className="flex  justify-between items-center mt-2">
        <p>{productPrice} Tk.</p>
        <button type="button" className="app_foodCard-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
