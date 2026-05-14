import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Login.css';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-form">
        <h1>Login / Register</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button type="button">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;