"use client";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/modules/Header";
import Head from "next/head"; // Import the Head component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo.svg" type="image/png" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
