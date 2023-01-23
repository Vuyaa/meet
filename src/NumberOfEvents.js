import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
    errorText:"",
  };

  noeInput = (e) => {
    const inputValue = e.target.value;
    this.props.updateEvents(null, inputValue);
    if (inputValue > 32){ 
    this.setState({
      errorText: "Number of events shouldn't be grater than 32 ",
    });
  }else {
    this.setState({
      eventCount: inputValue,
      errorText:"",
    })
  }
};


  componentDidMount() {
    this.setState({ eventCount: this.props.eventCount || 32 });
  }

  render() {
    return (
      <div className="numOfEvents">
        <ErrorAlert text={this.state.errorText}/>
        <h2>Number Of Events</h2>
        <input
          type="number"
          className="noe-Input"
          value={this.state.eventCount}
          // onChange={this.noeInput}
          onChange={(event) => {
            this.noeInput(event);
          }}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;