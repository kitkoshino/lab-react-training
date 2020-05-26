import React, {Component} from 'react';
import './clickablePicture.css';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true
    };
  }

  changePhoto = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    const img = this.props.img;
    const imgOne = this.props.imgOne;

    return (
      <div className="clickable-picture">
        <button onClick={this.changePhoto}><p>{(this.state.clicked && <img src={img} alt=""/>) || <img src={imgOne} alt=""/>}</p></button>
      </div>
    );
  };




}

export default ClickablePicture;