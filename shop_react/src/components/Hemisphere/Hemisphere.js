import React from "react";


export default class Hemisphere extends React.Component {
  render(){
    return (
      <div>
          <svg version="1.1"
              width="300" height="200"
              viewBox="0 0 300 200" >
            <rect width="100%" height="100%" fill="darkred" />
            { manyLines() }
          </svg>
      </div>
  );
  }}

  function manyLines () {
    let tmp = [];
    let x = 40;
    let y = 30;
    let r = 10;
    let g = 128;
    let b = 256;
    for(let i=0; i<4; ++i){
         tmp.push(<rect x={x*i} y={y*i} width="30%" height="30%" fill={`rgb(${r+(i*50)},${g}, ${b-(i*100)})`} />);
    }
    return tmp;
}  