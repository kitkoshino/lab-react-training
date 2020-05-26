import React from 'react';
import './creditCard.css';

const CreditCard = (props) => {
  const type = props.type;
  const number = props.number;
  const expirationMonth = props.expirationMonth;
  const expirationYear = props.expirationYear;
  const bank = props.bank;
  const owner = props.owner;
  const bgColor = props.bgColor;
  const color = props.color;
  let typeImage;

  switch (type) {
    case 'Visa':
      typeImage = '/img/visa.png';
      break;
    case 'Master Card':
      typeImage = '/img/master-card.svg';
      break;
    default:
      typeImage = '/img/logo512.png';
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={typeImage} alt="" />
      <div className="card-number">
        <div className="number">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="number">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="number">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="number">{number.toString().slice(-4)}</div>
      </div>
      <div className="card-data">
        <div className="date-and-bank">
          <p>
            Expires: {expirationMonth}/{expirationYear.toString().substr(-2)}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
