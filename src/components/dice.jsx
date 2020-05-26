import React, {Component} from 'react';

class Dice extends Component {
  constructor () {
    super();
    this.state = {
      clicked: true
    };
  }
  
  diceClickStatus = () => {
    this.setState({
      clicked: !this.state.liked
    });
  }
  
  render() {
    return(
      <div>
        
      </div>
    )
  }

}

export default Dice;