import React from "react";
import logo from './user.png';
import './style.css';
import LoginForm from "./components/LoginForm/LoginForm";
import Tableau from "./components/Tableau/Tableau";

export default class App extends React.Component {
  render () {
  return (
      <div id="formContent">
          <div className="fadeIn first">      
          <img src={logo} className="reg_login" alt="logo"/>
          </div>
          <LoginForm/>
          <div id="formFooter">
            <p className="underlineHover">Регистрация / Список книг</p><br/>
            <Tableau/>
          </div>
        </div>
  );
}}