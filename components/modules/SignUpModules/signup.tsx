"use client"; // Add this directive for Client Components

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import './signup.css';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const SignUp = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle the close button click
  const handleClose = () => {
    router.push("/"); // Navigate back to the home page
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
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
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-description">
          Let’s get you all set up so you can access your personal account.
        </p>
        <form className="signup-form">
          <div className="name-row">
            <div>
              <label>First Name:</label>
              <input type="text" placeholder="John" required />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="email-row">
            <div>
              <label>Email:</label>
              <input type="email" placeholder="john.doe@gmail.com" required />
            </div>
            <div>
              <label>Phone Number:</label>
              <input type="tel" placeholder="+123456789" required />
            </div>
          </div>
          <label>Password:</label>
          <div className="password-wrapper">
            <input type="password" placeholder="********" required />
            <button type="button" className="toggle-password">
              <span>&#128065;</span>
            </button>
          </div>
          <label>Confirm Password:</label>
          <div className="password-wrapper">
            <input type="password" placeholder="********" required />
            <button type="button" className="toggle-password">
              <span>&#128065;</span>
            </button>
          </div>
          <div className="terms-row">
            <input type="checkbox" required className="checkbox" />
            <label className="terms-label">
              I agree to all the <Link href="/terms">Terms</Link> and{" "}
              <Link href="/privacy-policies">Privacy Policies</Link>.
            </label>
          </div>
          <button type="submit" className="signup-btn">Create account</button>
        </form>
        <div className="login-option">
          <p>
            Already have an account? <Link href="/login">Login</Link>
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

export default SignUp;
