import React, {Component} from 'react';
import './likeButton.css';

class LikeButton extends Component {
  constructor(){
    super();
    this.state = {  
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        
        <button onClick={this.incrementCounter} className="btn"><span>{this.state.count}</span> Likes</button>
      </div>
    );
  }
}

export default LikeButton;