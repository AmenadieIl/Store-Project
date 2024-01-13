import React from 'react';
import '../styles/cart.css'

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty">
        <p>Cart is empty</p>
        <p>Go add some items to your cart!</p>
        <p>Total Amount: ${calculateTotal().toFixed(2)}</p>
      </div>
      ) : (
        <div>
          <div className='posts-container'>
            {cart.map((item) => (
              <div key={item._id} className='product-container-cart'>
                <div className='product-frame-cart'>
                  <img
                    className='product-image'
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className='product-details'>
                  <p className='product-title'>{item.title}</p>
                  <p className='product-price'>Price: ${item.price}</p>
                  <div className='quantity-controls'>
                    <button className='decrement' onClick={() => decrementQuantity(item._id)}>-</button>
                    <input
                      type='text'
                      className='quantity'
                      value={item.quantity}
                      readOnly
                    />
                    <button className='increment' onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <button className='removeFromCart' onClick={() => removeFromCart(item._id)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='total-amount'>
            <p>Total Amount: ${calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;