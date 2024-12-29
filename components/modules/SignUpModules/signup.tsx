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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailCheckTimeout = useRef<NodeJS.Timeout | null>(null);

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    router.push("/");
  };

  // Function to validate password
  const validatePassword = (password: string): string | null => {
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(password))
      return "Password must include at least one uppercase letter";
    if (!/\d/.test(password))
      return "Password must include at least one number";
    return null;
  };

  // Function to validate phone number
  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phoneNumber);
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
      return response.data.exists;
    } catch (err) {
      console.error("Error checking email:", err);
      return false;
    }
  };

  // Function to determine form validity
  const isFormValid = (): boolean => {
    const passwordValid = validatePassword(formData.password) === null;
    const phoneValid = validatePhoneNumber(formData.phoneNumber);
    const passwordsMatch = formData.password === formData.confirmPassword;

    return (
      Boolean(formData.firstName) &&
      Boolean(formData.lastName) &&
      Boolean(formData.email) &&
      phoneValid &&
      passwordValid &&
      passwordsMatch
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    toast.dismiss();

    // Check passwords
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      toast.error(passwordError);
      setIsSubmitting(false);
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      toast.error("Invalid phone number format");
      setIsSubmitting(false);
      return;
    }

    // Debounce email check
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
          payload,
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
        if (axios.isAxiosError(err)) {
          const backendError =
            err.response?.data?.detail || "API Error occurred.";
          toast.error(backendError);
        } else {
          toast.error("Unexpected error. Please try again.");
        }
      }
      setIsSubmitting(false);
    }, 500);
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
          <button
            type="submit"
            className="signup-btn"
            disabled={isSubmitting || !isFormValid()}
          >
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
