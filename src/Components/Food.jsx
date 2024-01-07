import React, { useContext, useEffect, useState } from 'react';
import data from '../data';
import FoodCard from './FoodCard';
import { cartContext } from '../Provider/CartProvider';

const Food = () => {
  const {setEnter} = useContext(cartContext);
  useEffect(()=>{
    setEnter(true);
  },[])
  return (
    <div className='mx-4 p-10 bg-[#F1D5BB] rounded-3xl'>
      <h1 className='app_food_headtext'>SUSHI FOOD</h1>
      <div className='app_food_headtext-border'></div>
      <div className='grid grid-cols-4'>
        {
            data.map((item,index)=><FoodCard item={item} ></FoodCard>)
        }
      </div>
    </div>
  );
};

export default Food;