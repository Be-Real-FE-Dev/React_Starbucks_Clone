import { useState, useContext } from 'react';
import OrderContext from '../../store/order-context';
import OrderInfo from '../components/OrderInfo';
import Amount from '../components/UI/Amount';
import Button from '../components/UI/Button';

const Cart = () => {
  const orderCtx = useContext(OrderContext);
  const orderList = orderCtx.orderList;

  const clickCountHandler = (id, e) => {
    const count = orderList.find(item => item.id === id).amount;

    if (e.target.textContent === '-' && count > 1) {
      orderCtx.updateOrderList(
        orderList.map(item =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
      );
    }

    if (e.target.textContent === '+') {
      orderCtx.updateOrderList(
        orderList.map(item =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    }
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        <div>
          <input type="checkbox" id="all__checked" />
          <label htmlFor="all__checked">전체 선택</label>
        </div>
        <div>
          <button>선택 삭제</button>
          <button>전체 삭제</button>
        </div>
      </div>
      <ul>
        {orderList &&
          orderList.map(order => (
            <li key={order.id}>
              <input type="checkbox" />
              <OrderInfo item={order} />
              <Amount
                onClick={clickCountHandler.bind(null, order.id)}
                count={order.amount}
              />
              <Button>x</Button>
            </li>
          ))}
      </ul>
      <Button>주문하기</Button>
    </div>
  );
};

export default Cart;
