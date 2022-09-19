import React from "react";

export default class Tableau extends React.Component {
	constructor(props) {
		super(props);
		this.number = props.player;
		this.updatePlayer = props.updatePlayer;
		this.getPlayer = props.getPlayer;
		this.state = {
      time: [
          {total: 50, m: 0, s: 0, timer: 0},
          {total: 50, m: 0, s: 0, timer: 0}]
		};
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
	}
  secondsToTime(secs){
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.time[this.number-1].total);
    // this.setState({ time: timeLeftVar });
  }

  startTimer(player) {
      if (!this.state.time[player-1].timer){
        this.state.time[player-1].timer = setInterval(this.countDown, 1000);

      }
  }

  countDown() {
    console.log(this.number)
      this.state.time[this.number-1].total -= 1;

      console.log(this.state.time)
    this.setState({
      time: this.state.time,

    });
    
    // Check if we're at zero.
    // if (seconds == 0) { 
    //   clearInterval(this.timer);
    // }
  }

	render () {
		return (<p style={{backgroundColor: this.number == 1? 'green': 'lightblue'}} 
		onClick={this.getPlayer() == this.number ? this.updatePlayer : () => {{this.startTimer()}
			                                       console.log('нельзя')}}>m: {this.state.time[this.number-1].total} s: {this.state.time[this.number-1].total} 
		(Я игрок {this.number})</p>);
	}
}





// export default class Tableau extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dt: new Date()
//     };
//     this.backgroundColor = props.backgroundColor ? props.backgroundColor: "yellow";
//     this.color = props.color ? props.color : "red";
    
//   }
//   updateTime = () => {
//     var now = new Date()
//     this.setState({
//         dt: now
//     });
//   }
//   componentDidMount() {
//     setInterval(this.updateTime, 1000);
//   }

//   render () {
//     return (
//         <p style={{
//             color: this.color,
//             backgroundColor: this.backgroundColor
//         }}>Местное время {this.state.dt.toLocaleTimeString()}</p>
//     );
//   }
// }
