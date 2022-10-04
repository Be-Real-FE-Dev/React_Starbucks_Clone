import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './CardCard.module.css';
import { cartActions } from '../store/cart';

const CartCard = (props) => {
  const dispatch = useDispatch();

  const checkHandler = (e) => {
    dispatch(cartActions.toggleItemChecked(props.id));
  };

  const deleteHandler = (e) => {
    dispatch(cartActions.deleteItem(props.id));
  };

  const increaseCountHandler = (e) => {
    dispatch(cartActions.clickCount({ id: props.id, degit: 1 }));
  };
  const decreaseCountHandler = (e) => {
    dispatch(cartActions.clickCount({ id: props.id, degit: -1 }));
  };

  return (
    <li className={classes['cart-card']}>
      <div className={classes['cart-left-section']}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes['cart-right-section']}>
        <h3>{props.name}</h3>
        <h4>{props.engName}</h4>
        <div className={classes['cart-price']}>
          <div className={classes['cart-counter']}>
            <button onClick={decreaseCountHandler}>-</button>
            <p>{props.count}</p>
            <button onClick={increaseCountHandler}>+</button>
          </div>
          <p>{props.totalPrice}</p>
        </div>
        <input
          className={classes['checkbox']}
          type="checkbox"
          name={props.id}
          id={props.id}
          checked={props.isChecked}
          onChange={checkHandler}
        />
        <button className={classes['close']} onClick={deleteHandler}>
          x
        </button>
      </div>
    </li>
  );
};

export default CartCard;
