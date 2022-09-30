import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// import classes from 'Order.module.css';
import { cartActions } from '../store/cart';
import BeverageDesc from '../components/BeverageDesc';
import Counter from '../components/Counter';

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const products = useSelector((state) => state.products.products);
  const params = useParams();
  const product = products[params.menuId];

  const increseHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreseHandler = () => {
    setCount((prevCount) => {
      return prevCount === 1 ? 1 : prevCount - 1;
    });
  };

  const AddCartHandler = (event) => {
    event.preventDefault();

    dispatch(
      cartActions.addCart({
        id: params.menuId,
        count: count,
        isChecked: false,
      })
    );

    navigate('/cart');
  };

  if (!product) {
    return;
  }

  return (
    <form onSubmit={AddCartHandler}>
      <div>
        <img src={product.image} alt="" />
      </div>
      <BeverageDesc
        name={product.name}
        engName={product.engName}
        price={product.price}
      />
      <Counter
        onIncrease={increseHandler}
        onDecrease={decreseHandler}
        count={count}
      />
      <button type="submit">장바구니 담기</button>
    </form>
  );
};

export default Order;
