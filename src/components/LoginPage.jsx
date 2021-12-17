import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {validatePassword, validateUsername} from "../util/validate";
import "../assets/css/LoginPage.css";


export default function LoginPage(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({password: "", username: ""});

  const navigate = useNavigate();


  const handleInput = (e)=>{
    const {value, type} = e.currentTarget;

    switch(type){
      case "password":
        setPassword(value);
        break;
      case "email":
        setUsername(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = {...errors};
    if(!validateUsername(username)) err.username = "Invalid Username";
    else err.username = "";

    if(!validatePassword(password)) err.password = "Invalid Password";
    else err.password = "";

    if(!err.password && !err.username && password==="SmartServTest@123"){
      navigate("/dashboard");
    }

    setErrors(err);
  }

  return (
    <div className='login-page'>
      <div className="login-form-container">
        <form className='login-form' onSubmit={e=>handleSubmit(e)}>
          <img src={Logo} alt="logo" loading="eager" className='block login-form-logo' />
          <div className='login-form-errors'>
            {errors.username || errors.password}
          </div>
          <input onInput={e=>handleInput(e)} type="email" placeholder="Username" name="username" value={username} required className='block login-form-input' />
          <input onInput={e=>handleInput(e)} type="password" placeholder="Password" name="password" value={password} required className='block login-form-input' />
          <button type='submit' className='block login-form-btn'>Login</button>
          <section>
            <a className='forgot-link block' href="mailto:support@smartserv.io">Forgot your password?</a>
          </section>
        </form>
      </div>
    </div>
  );
}
