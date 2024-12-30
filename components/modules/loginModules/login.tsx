"use client"; // Add this directive for Client Components

import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "@/components/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext); // Access auth context
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { setUser } = authContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // State to handle button loading

  // Function to handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts
    setError(null); // Reset error

    try {
      // Prepare data for x-www-form-urlencoded format
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
        formData, // Send the form data as application/x-www-form-urlencoded
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        // Save token to localStorage
        localStorage.setItem("token", token);

        // Update user state in context
        setUser(user);

        toast.success("Login successful!"); // Show success toast
        router.push("/"); // Navigate to home page
      }
    } catch (err: unknown) {
      setError("An error occurred. Please try again."); // Default error message

      // Log error to console for debugging
      console.error("Login error:", err);

      // Display more specific error message based on the response
      if (axios.isAxiosError(err) && err.response) {
        console.error("Error details:", err.response.data); // Log server response

        if (err.response.status === 422) {
          // Handle the 422 error specifically
          toast.error(
            "Invalid input. Please check your email and password format."
          );
        } else {
          toast.error(err.response?.data?.message || "An error occurred.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
      // Show error toast with message
      toast.error(
        (axios.isAxiosError(err) && err.response?.data?.message) ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  const handleClose = () => {
    router.push("/");
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
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
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
          <button
            type="submit"
            className="login-btn"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"} {/* Change button text */}
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
