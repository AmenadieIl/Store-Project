import React from 'react'
import Products from '../components/Products'
import '../styles/main.css';

const Miscellaneous = ({ addToCart }) => {
  return (
    <div>
      <Products category='Miscellaneous' addToCart={addToCart}/>
    </div>
  )
}

export default Miscellaneous;
