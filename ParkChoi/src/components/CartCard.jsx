import React from 'react';

import classes from './CardCard.module.css';

const CartCard = (props) => {
  return (
    <li className={classes['cart-card']}>
      <div className={classes['cart-left-section']}>
        {/* <img src={props.image} alt="" /> */}
        <img src="/src/assets/images/products/americano.jpeg" alt="" />
      </div>
      <div className={classes['cart-right-section']}>
        {/* <h3>{props.name}</h3> */}
        <h3>아이스아메</h3>
        {/* <h4>{props.engName}</h4> */}
        <h4>Iced Ame</h4>
        <div className={classes['cart-price']}>
          <div className={classes['cart-counter']}>
            <button>-</button>
            {/* <p>{props.count}</p> */}
            <p>5</p>
            <button>+</button>
          </div>
          <p>5,500</p>
        </div>
        <input className={classes['checkbox']} type="checkbox" name="" id="" />
        <button className={classes['close']}>x</button>
      </div>
    </li>
  );
};

export default CartCard;
