import React from 'react';
import './generalStyle.css';

const Random = (props) => {
  const min = props.min;
  const max = props.max;
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="box-style">
      <p>
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
};

export default Random;