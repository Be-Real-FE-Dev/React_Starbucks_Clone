import React from 'react';
import { Link } from 'react-router-dom';
import BeverageDesc from './BeverageDesc';

import classes from './Beverage.module.css';

const Beverage = (props) => {
  return (
    <li>
      <Link to={`/order/${props.id}`}>
        <div className={classes['beverage-container']}>
          <div className={classes['beverage-img']}>
            <img src={props.image} alt="" />
          </div>
          <BeverageDesc
            name={props.name}
            engName={props.engName}
            price={props.price}
          />
        </div>
      </Link>
    </li>
  );
};

export default Beverage;
