import classes from "./OrderItem.module.css";

const OrderItem = () => {
  return (
    <li className={classes.orderItem}>
      <div>
        <p>아메리카노</p>
        <p>4,500원</p>
      </div>
      <img src="https://via.placeholder.com/100x100" alt="이미지" />
    </li>
  );
};

export default OrderItem;
