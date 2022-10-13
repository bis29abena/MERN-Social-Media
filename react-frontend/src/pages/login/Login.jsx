import React from "react";

import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">Bis-Social</div>
          <span className="loginDesc">
            Connect with friends and the world around You
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="email" placeholder="Email" className="loginInput" />
                <input type="password" placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegister">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
