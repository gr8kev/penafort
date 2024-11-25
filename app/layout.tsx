"use client";
import { Header } from "@/components/Header";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "@/components/Footer";
import BootstrapJS from "@/components/BootstrapJS";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapJS />
      </body>
    </html>
  );
}
