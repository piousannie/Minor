import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './LoginForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });
      let resJson = await res.json();
      window.location.replace('http://localhost:3000/report');
      if (res.status === 200) {
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar />
    <div class="center">
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div class="txt_field">
          <input type="text" required onChange={(e) => {
            setUsername(e.target.value)
          }}/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div class="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
