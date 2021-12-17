import React from 'react';
import Logo from "../assets/images/logo.png";
import "../assets/css/LoginPage.css";

export default function LoginPage(props){
  return (
    <div className='login-page'>
      <div className="login-form-container">
        <form className='login-form'>
          <img src={Logo} alt="logo" loading="eager" className='block login-form-logo' />
          <input type="email" placeholder="Username" name="username" required className='block login-form-input' />
          <input type="password" placeholder="Password" name="password" required className='block login-form-input' />
          <button type='submit' className='block login-form-btn'>Login</button>
          <section>
            <a className='forgot-link block' href="mailto:support@smartserv.io">Forgot your password?</a>
          </section>
        </form>
      </div>
    </div>
  );
}