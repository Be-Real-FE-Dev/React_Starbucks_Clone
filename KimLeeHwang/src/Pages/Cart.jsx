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
          <div>
            <p>아메리카노</p>
            <p>4,500원</p>
          </div>
          <div>
            <buton>-</buton>
            <span>1</span>
            <buton>+</buton>
          </div>
          <img src="../" alt="이미지" />
          <button>x</button>
        </li>
      </ul>
      <button>주문하기</button>
    </div>
  );
};

export default Cart;
