import React from 'react';
import './idCard.css';

const IdCard = props => {
  const lastName = props.lastName;
  const firstName = props.firstName;
  const gender = props.gender;
  const height = props.height;
  const birth = props.birth;
  const picture = props.picture;

  return (
    <div className="id-cards box-style">
      <img src={picture} alt=""/>
      <div className="user-data">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toString().slice(0,15)}</p>
      </div>

    </div>
  );
};



export default IdCard;