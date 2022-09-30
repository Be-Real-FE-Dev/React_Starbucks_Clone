import classes from './Counter.module.css';

const Counter = (props) => {
  return (
    <div className={classes['counter-container']}>
      <div>
        <p className={classes['count-title']}>수량</p>
      </div>
      <div className={classes['counterbox']}>
        <button onClick={props.onDecrease}>-</button>
        <p>{props.count}</p>
        <button onClick={props.onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Counter;
