"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import "./signup.css";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    router.push("/");
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Frontend validations
    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must be at least 8 characters long, include at least one uppercase letter and one number."
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.status === 200) {
        toast.success("Account created successfully!");
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.detail || "An error occurred. Please try again."
        );
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
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
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-description">
          Let’s get you all set up so you can access your personal account.
        </p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="email-row">
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+123456789"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label>Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <label>Confirm Password:</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="terms-row">
            <input type="checkbox" required className="checkbox" />
            <label className="terms-label">
              I agree to all the <Link href="/terms">Terms</Link> and{" "}
              <Link href="/privacy-policies">Privacy Policies</Link>.
            </label>
          </div>
          <button type="submit" className="signup-btn" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create account"}
          </button>
        </form>
        <div className="login-option">
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
