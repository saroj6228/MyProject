import './App.css';
import React from 'react';
import sad from './sad.png';
import happy from './happy.png';

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
  }

  Toggle_Mode() {
    this.setState((prevState) => {
      return { pic: prevState.pic === sad ? happy : sad };
    });
  }

  render() {
    return (
      <div>
        <h3>Toggle Mode: {this.state.pic === happy ? "Happy" : "Sad"}</h3>
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt="Emoji" />
        </button>
      </div>
    );
  }
}

export default ToggleMode;
