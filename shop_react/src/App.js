import React from "react";
import { Circle } from "./components/Circle/Circle";
import { Clock } from "./components/Clock/Clock";
import { HoursArrow } from "./components/HoursArrow/HoursArrow";
import { ClockMarks } from "./components/Marks/Marks";
import { MinutesArrow } from "./components/MinutesArrow/MinutesArrow";
import { SecondsArrow } from "./components/SecondsArrow/SecondsArrow";


import './App.css';


export default function App(){
return  <div className="App">
        <Clock render={(secondsDeg, minutesDeg, hoursDeg) => {
            return <svg>
                <Circle x="20" y="20" r="19"/>
                <ClockMarks/>
                <Circle x="25" y="25" r="4" className="Seconds__circle"/>
                <SecondsArrow deg={secondsDeg}/>
                <Circle x="25" y="25" r="0.3" className="Seconds__circle"/>
                <HoursArrow deg={hoursDeg}/>
                <MinutesArrow deg={minutesDeg}/>
                <Circle x="20" y="20" r="0.6" className="Clock__pin"/>
            </svg>
        }}/>
    </div>;
}
	
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			currentPlayer: 1
// 		};
// 	}
	
// 	getPlayer = () => {
// 		return this.state.currentPlayer;
// 	}
	
// 	updatePlayer = () => {
// 		console.log('old state player: ', this.state.currentPlayer);
// 		this.setState({currentPlayer: 3 - this.state.currentPlayer});
// 	}
	
// 	render () {
// 	  return (
// 		<div>
// 		  <p>Игрок: {this.state.currentPlayer} </p><br/>
// 		  <Tableau player={1}
// 				   getPlayer={this.getPlayer}
// 		           updatePlayer={this.updatePlayer}/><br/>
// 		  <Tableau player={2}
// 				   getPlayer={this.getPlayer}
// 		           updatePlayer={this.updatePlayer}/>
// 		</div>
// 	  );
// 	}
// }





/*{<div id="formContent">
        <Tableau backgroundColor="green"/>
          <div className="fadeIn first">      
          <img src={logo} className="reg_login" alt="logo"/>
          </div>
          <LoginForm/>
          <div id="formFooter">
            <p className="underlineHover">Регистрация / Список книг</p><br/>
            <Tableau color="green" backgroundColor="None" />
          </div>
        </div> }*/