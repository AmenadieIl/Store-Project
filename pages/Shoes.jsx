import React from 'react'
import Products from '../components/Products'
import '../styles/main.css';

const Shoes = ({ addToCart }) => {
  return (
    <div>
      <Products category='Shoes' addToCart={addToCart}/>
    </div>
  )
}

export default Shoes;
