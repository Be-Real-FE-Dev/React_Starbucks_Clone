import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import classes from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const doShoppingHandler = () => {
    navigate('/');
  };

  const logOrderHandler = () => {
    console.log(cart);
  };

  return (
    <div>
      <h2 className={classes.title}>Cart</h2>
      <div className={classes['cart-container']}>
        <h3 className={classes.subtitle}>주문 메뉴</h3>
        <div className={classes.all}>
          <div className={classes.inputbox}>
            <input id="all" type="checkbox" />
            <label htmlFor="all">전체 선택</label>
          </div>
          <div>
            <button>전체 삭제</button>
          </div>
        </div>
        <ul>
          <CartCard />
        </ul>
        <div className={classes['order-box']}>
          <button onClick={doShoppingHandler}>계속 쇼핑하기</button>
          <button onClick={logOrderHandler}>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
