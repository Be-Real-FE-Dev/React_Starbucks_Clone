import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useHttp from './hooks/use-http';

import { productsActions } from './store/products';

import './App.css';
import Home from './pages/Home';
import Order from './pages/Order';
import Cart from './pages/Cart';

function App() {
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    fetchProducts(
      {
        url: 'https://react-http-playground-default-rtdb.asia-southeast1.firebasedatabase.app/starbucks/products.json',
      },
      productsActions.fetch
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:menuId" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
