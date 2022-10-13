import React from "react";

import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <div className="registerLogo">Bis-Social</div>
          <span className="registerDesc">
            Connect with friends and the world around You
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="User Name"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="registerInput"
            />
            <div className="registerButtons">
              <button className="registerButtonSignUp">Sign Up</button>
              <button className="registerButtonLogin">Login into Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
