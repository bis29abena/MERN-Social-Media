import React from "react";
import { useRef } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

import "./register.css";

export default function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()

    if(password.current.value !== passwordAgain.current.value) {
        password.current.setCustomValidity("Password don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        const res = await axios.post("/auth/register", user);
        history("/login")
      } catch (error) {
        console.log(error)
      }
    }
  }

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
          <form className="registerBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="User Name"
              className="registerInput"
              required
              ref={username}
            />
            <input type="email" placeholder="Email" className="registerInput" ref={email} required/>
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              placeholder="Password Again"
              className="registerInput"
              required
              minLength="6"
              ref={passwordAgain}
            />
            <div className="registerButtons">
              <button className="registerButtonSignUp" type="submit">Sign Up</button>
              <button className="registerButtonLogin">Login into Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
