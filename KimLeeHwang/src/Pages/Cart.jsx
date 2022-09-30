import OrderInfo from '../components/OrderInfo'
import Amount from '../components/UI/Amount'
import Button from '../components/UI/Button'

const Cart = () => {
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
        <li>
          <input type="checkbox" />
          <OrderInfo />
          <Amount />
          <Button>x</Button>
        </li>
      </ul>
      <Button>주문하기</Button>
    </div>
  );
};

export default Cart;
