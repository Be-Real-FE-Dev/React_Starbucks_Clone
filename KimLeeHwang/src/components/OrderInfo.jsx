import React from 'react';

const OrderInfo = ({ item, styles }) => {
  return (
    <div className={styles}>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <img src="" alt="이미지" />
    </div>
  );
};

export default OrderInfo;
