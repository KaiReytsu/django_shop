import React from "react";

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dt: new Date()
    };
    
  }
  updateTime = () => {
    this.setState({
        dt: new Date()
    });
  }
  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  render () {
    return (
      <p>Местное время {this.state.dt.toLocaleTimeString()}</p> 
    );
  }
}
