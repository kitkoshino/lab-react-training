import React, {Component} from 'react';


class Carousel extends Component {
  constructor(){
    super();
    this.state = {
      images: [
        
      ]
    }
  }

  render() {    
    return (
      <div>
        <button>right</button>
        <button>left</button>

      </div>
      ); 
  }
}

export default Carousel;
