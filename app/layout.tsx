"use client";

import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "@/components/Footer";
import BootstrapJS from "@/components/BootstrapJS";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";

const Opensans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body>
        <main className={Opensans.className}>
          <Header />
          {children}
          <Footer />
          <BootstrapJS />
        </main>
      </body>
    </html>
  );
}
