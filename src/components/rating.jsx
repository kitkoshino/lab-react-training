import React from 'react';

const Rating = props => {
  let rateNumber = props.rateNumber;

  return (
    <div>
      <p>{rateNumber}</p>
    </div>
  )


}

export default Rating;