import React from 'react'

const OrderInfo = ({item}) => {
  return (
    <>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <img src="https://via.placeholder.com/100x100" alt="이미지" />
    </>
  )
};

export default OrderInfo;