"use client"; // Add this directive for Client Components

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import './login.css';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const Login: React.FC = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle the close button click
  const handleClose = () => {
    router.push("/"); // Navigate back to the home page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button className="close-btn" onClick={handleClose}>&times;</button>
        <div className="logos">
          <Image
            src="/images/logo2.png"
            alt="Penafort Winery"
            width={100}
            height={50}
          />
          <h1>Penafort Winery</h1>
        </div>
        <h2 className="login-title">Login</h2>
        <p className="login-description">
          Login to access your Penafort Winery account
        </p>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="john.doe@gmail.com" required />
          <label>Password</label>
          <div className="password-wrapper">
            <input type="password" placeholder="********" required />
            <button type="button" className="toggle-password">
              <span>&#128065;</span>
            </button>
          </div>
          <div className="options">

          <div className="option">
  <label>
    <input type="checkbox" className="checkbox" />
    <span className="opt">Remember me</span>
  </label>
</div>

  <a href="#" className="forgot-password">Forgot Password?</a>
</div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-option">
          <p>
            Don’t have an account? <Link href="/signup">Sign up</Link>
          </p>
        </div>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <button className="social-btn facebook"><FaFacebook size={22} /></button>
            <button className="social-btn google"><FcGoogle size={22} /></button>
            <button className="social-btn apple"><FaApple size={22} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
