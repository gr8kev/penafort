"use client";

import { Header } from "@/components/Header";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Head from "next/head"; // Import the Head component
import Footer from "@/components/Footer";

// Declaring the type for the props of the RootLayout component
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo.svg" type="image/png" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
