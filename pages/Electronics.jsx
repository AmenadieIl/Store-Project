import React from 'react';
import Products from '../components/Products';
import '../styles/main.css';

const Electronics = ({ addToCart }) => {
  return (
    <div>
      <Products category='Electronics' addToCart={addToCart}/>
    </div>
  );
};

export default Electronics;
