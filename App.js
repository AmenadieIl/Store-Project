import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Error from './errorPage/Error';
import Products from './components/Products';
import Electronics from './pages/Electronics';
import Clothes from './pages/Clothes';
import Miscellaneous from './pages/Miscellaneous';
import Shoes from './pages/Shoes';
import CartLogic from './components/CartLogic';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <CartLogic>
            {({ addToCart }) => (
              <Products addToCart={addToCart} />
            )}
          </CartLogic>
        )
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cart',
        element: (
          <CartLogic>
            {({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => (
              <Cart 
              cart={cart}
               removeFromCart={removeFromCart} 
               incrementQuantity={incrementQuantity}
               decrementQuantity={decrementQuantity}
               />
            )}
          </CartLogic>
        )
      },
      {
        path: '/electronics',
        element: (
          <CartLogic>
            {({ addToCart }) => <Electronics addToCart={addToCart} />}
          </CartLogic>
        )
      },
      {
        path: '/clothes',
        element: (
          <CartLogic>
            {({ addToCart }) => <Clothes addToCart={addToCart} />}
          </CartLogic>
        )
      },
      {
        path: '/miscellaneous',
        element: (
          <CartLogic>
            {({ addToCart }) => <Miscellaneous addToCart={addToCart} />}
          </CartLogic>
        )
      },
      {
        path: '/shoes',
        element: (
          <CartLogic>
            {({ addToCart }) => <Shoes addToCart={addToCart} />}
          </CartLogic>
        )
      }
    ]
  }
], {
  basename: '/'
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
