import React, { useContext, useEffect } from 'react';
import { cartContext } from '../Provider/CartProvider';

const Location = () => {
  const {setEnter} = useContext(cartContext);
  useEffect(()=>{
    setEnter(true);
  },[])
  return (
    <div className='flex justify-center mt-20'>
      <h1 className='text-3xl font-semibold'>For check my task please go to menu section.</h1>
    </div>
  );
};

export default Location;