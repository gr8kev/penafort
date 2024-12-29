"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import axios from "axios";
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

  const [isSubmitting, setIsSubmitting] = useState(false); // Flag to prevent multiple submissions
  const emailCheckTimeout = useRef<NodeJS.Timeout | null>(null); // Ref to debounce the email check

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    router.push("/");
  };

  // Function to check if email already exists
  interface CheckEmailResponse {
    exists: boolean;
  }

  const checkIfEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await axios.get<CheckEmailResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/check-email`,
        { params: { email } }
      );
      return response.data.exists; // Assuming the response contains a field 'exists' (true/false)
    } catch (err) {
      console.error("Error checking email:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent further submissions while email check is ongoing
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    // Clear previous toasts to avoid stacking
    toast.dismiss();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    // Debounce email check to avoid unnecessary requests
    if (emailCheckTimeout.current) {
      clearTimeout(emailCheckTimeout.current);
    }

    emailCheckTimeout.current = setTimeout(async () => {
      const emailExists = await checkIfEmailExists(formData.email);
      if (emailExists) {
        toast.error("Email already exists, please sign in.");
        setIsSubmitting(false);
        return;
      }

      // Proceed with the registration if the email is not taken
      try {
        const payload = new URLSearchParams();
        payload.append("first_name", formData.firstName);
        payload.append("last_name", formData.lastName);
        payload.append("email", formData.email);
        payload.append("phone_number", formData.phoneNumber);
        payload.append("password", formData.password);
        payload.append("confirm_password", formData.confirmPassword);

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
          payload, // Sending as URLSearchParams
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (response.data.message) {
          toast.success("Account created successfully!");
          setTimeout(() => router.push("/login"), 2000);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } catch (err) {
        console.error("Error:", err);
        toast.error("There was an issue with the API request.");
      }
      setIsSubmitting(false);
    }, 500); // Debounce delay of 500ms
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
          <div className="password-wrapper">
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <label>Confirm Password:</label>
          <div className="password-wrapper">
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
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
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
