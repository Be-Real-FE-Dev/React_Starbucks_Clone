import React, { useState } from 'react';
import OrderContext from './order-context';

const OrderProvider = props => {
  const [orderList, setOrderList] = useState([]);

  const updateOrderList = arr => {
    setOrderList(arr);
  };

  const addOrderHandler = order => {
    const id = Math.max(...orderList.map(order => order.id), 0) + 1;
    setOrderList(prevList => [...prevList, { id, ...order }]);
  };

  return (
    <OrderContext.Provider
      value={{
        orderList,
        updateOrderList,
        addOrderHandler,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
