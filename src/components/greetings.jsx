import React from 'react';
import './generalStyle.css';

const Greetings = (props) => {
  const lang = props.lang;
  const children = props.children;
  let welcomeMessage;

  switch (lang) {
    case 'de':
      welcomeMessage = 'Hallo';
      break;
    case 'en':
      welcomeMessage = 'Hello';
      break;
    case 'fr':
      welcomeMessage = 'Bon Jour';
      break;
    case 'es':
      welcomeMessage = 'Hola';
      break;
    default:
      welcomeMessage = 'Hello';
  }

  return (
    <div className="box-style">
      <p>
        {welcomeMessage}, {children}
      </p>
    </div>
  );
};

export default Greetings;
