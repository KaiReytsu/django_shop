import React from "react";

function LoginForm() {
  return (
    <form>                             
      <input type="text" name="username" className="fadeIn second" id="login" placeholder="Логин" maxlength="150"/>
      <input type="password" name="password" className="fadeIn third" id="password" placeholder="Пароль"/>
      <input type="hidden" name="csrfmiddlewaretoken" value="N0r3UXE0m2NabbrvFDo0vArhGcJhYYiR1240zq2Vl5oaeKHojpJQRwShnjIgL3c0"/>
      <input type="submit" className="fadeIn fourth" value="Вход"/>
    </form>
  );
}

export default LoginForm;
