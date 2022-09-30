import React from 'react';
import classes from './BeverageDesc.module.css';

const BeverageDesc = (props) => {
  return (
    <div className={classes['beverage-title']}>
      <h4>{props.name}</h4>
      <p>{props.engName}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default BeverageDesc;
