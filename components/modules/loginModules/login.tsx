"use client"; // Add this directive for Client Components

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import axios from "axios"; // Import axios for API calls
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify"; // Import toast

const Login: React.FC = () => {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Function to handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Prepare data for API call
      const data = new URLSearchParams();
      data.append("email", email);
      data.append("password", password);

      // API call
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        toast.success("Login successful!"); // Show success toast
        router.push("/"); // Navigate to home page
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
      toast.error("Invalid email or password. Please try again."); // Show error toast
    }
  };

  // Function to handle the close button click
  const handleClose = () => {
    router.push("/"); // Navigate back to the home page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
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
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <label>Email</label>
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="signup-option">
          <p>
            Don’t have an account? <Link href="/signup">Sign up</Link>
          </p>
        </div>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <button className="social-btn facebook">
              <FaFacebook size={22} />
            </button>
            <button className="social-btn google">
              <FcGoogle size={22} />
            </button>
            <button className="social-btn apple">
              <FaApple size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default Login;
