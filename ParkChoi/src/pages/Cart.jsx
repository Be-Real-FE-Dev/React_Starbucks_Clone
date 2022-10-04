import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import classes from './Cart.module.css';
import { cartActions } from '../store/cart';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const isAllChecked = useSelector((state) => state.cart.isAllChecked);

  const filterCart = cart.map((item) => {
    const findItem = products[item.id];
    return { ...item, ...findItem, totalPrice: findItem.price * item.count };
  });

  const doShoppingHandler = () => {
    navigate('/');
  };

  const logOrderHandler = () => {
    console.log(cart);
  };

  const clickSelectAllHandler = () => {
    dispatch(cartActions.checkAllCart());
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div>
      <h2 className={classes.title}>Cart</h2>
      <div className={classes['cart-container']}>
        <h3 className={classes.subtitle}>주문 메뉴</h3>
        <div className={classes.all}>
          <div className={classes.inputbox}>
            <input
              id="all"
              type="checkbox"
              onChange={clickSelectAllHandler}
              checked={isAllChecked}
            />
            <label htmlFor="all">전체 선택</label>
          </div>
          <div>
            <button onClick={clearCartHandler}>전체 삭제</button>
          </div>
        </div>
        <ul>
          {filterCart.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
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
