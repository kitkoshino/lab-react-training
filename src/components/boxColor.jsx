import React from 'react';
import './generalStyle.css';


const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;  
  const color = `${r}, ${g}, ${b}`;
  return (
    <div className="box-color box-style" style={{backgroundColor: `rgb(${color})`}}>
      <p>rgb({r},{g},{b})</p>
    </div>
  );
};

export default BoxColor;