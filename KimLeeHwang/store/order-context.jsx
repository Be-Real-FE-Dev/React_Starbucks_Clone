import React from 'react';
const OrderContext = React.createContext({
  orderList: [],
  addOrderHandler: state => {},
});

export default OrderContext;
