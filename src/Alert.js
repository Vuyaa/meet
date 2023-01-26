import React, { Component } from 'react';

class Alert extends Component {
    constructor(props){
        super(props);
        this.color = null;
        this.position = "inherit";
}       

getStyle = () => {
    return {
        color: this.color,
        position: this.position
    };
}

render() {
    return (
        <div className='Alert'>
            <p style={this.getStyle()}>{this.props.text}</p>
        </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor (props) {
        super(props);
        this.color = 'blue';
        
    }
}

class OfflineAlert extends Alert {
    constructor (props) {
    super(props);
        this.color = 'green';    
    }
}

class ErrorAlert extends Alert {
    constructor (props) {
        super(props);
        this.color = 'red';
    }
}


export {InfoAlert, ErrorAlert, OfflineAlert}