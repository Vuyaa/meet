import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <p className="summary">{event.summary}</p>
        <p className="start">{new Date(event.start.dateTime).toString()}</p>
        <p className="location">{event.location}</p>
        <button className="details-btn" onClick={this.toggleDetails}>
          {collapsed ? "show" : "hide"} Details
        </button>
        {!collapsed && (
          <div>
            {/* <h1 className="summary">{event.summary}</h1>
            <p className="start">{event.start.dateTime}</p> */}
            <p className="description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;