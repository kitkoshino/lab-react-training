import React, { Component } from 'react';
import './dice.css';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      diceImage: '/img/dice1.png',
    };
  }

  diceClickStatus = () => {
    this.setState({
      clicked: !this.state.liked,
    });
  };

  randomizeDice = () => {
    this.setState({ diceImage: '/img/dice-empty.png' });
    setTimeout(() => {
      const diceImages = [
        '/img/dice1.png',
        '/img/dice2.png',
        '/img/dice3.png',
        '/img/dice4.png',
        '/img/dice5.png',
        '/img/dice6.png',
      ].sort(() => 0.5 - Math.random());
      this.setState({ diceImage: diceImages[0] });
    }, 1000);
  };

  render() {
    return (
      <div className="dice">
        <button onClick={this.randomizeDice}>
          <img src={this.state.diceImage} alt="" />
        </button>
      </div>
    );
  }
}

export default Dice;
