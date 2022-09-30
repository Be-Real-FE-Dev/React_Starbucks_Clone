import React from 'react'
import OrderContext from './order-context'

const OrderProvider = props => {
  return (
    <OrderContext.Provider value={{}}>
      {props.children}
    </OrderContext.Provider>
  )
};

export default OrderProvider;