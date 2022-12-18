import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './LoginForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Please enter a valid username and password');
      return;
    }

    // Send a request to the server to verify the login credentials
    // If the credentials are valid, redirect the user to the dashboard page
    // If the credentials are invalid, show an error message
  };

  return (
    <>
    <Navbar />
    <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
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