import React from 'react';
import Products from '../components/Products';
import '../styles/main.css';

const Clothes = ({ addToCart }) => {
  return (
    <div>
      <Products category='Clothes' addToCart={addToCart} />
    </div>
  );
};

export default Clothes;
