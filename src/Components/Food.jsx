import React from 'react';
import data from '../data';
import FoodCard from './FoodCard';

const Food = () => {
  return (
    <div className='mx-4 p-10 bg-[#F1D5BB] rounded-3xl'>
      <h1 className='app_food_headtext'>SUSHI FOOD</h1>
      <div className='app_food_headtext-border'></div>
      <div className='grid grid-cols-4'>
        {
            data.map((item,index)=><FoodCard item={item} key={index}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default Food;