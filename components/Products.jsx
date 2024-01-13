import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/main.css';

const Products = ({ category, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div>
      <div className='posts-container'>
        {filteredProducts.map((product) => (
          <div key={product._id} className='product-container'>
            <div className='product-frame'>
              <img
                className='product-image'
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className='product-details'>
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>Price: ${product.price}</p>
              <button
                className="addToCart"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;