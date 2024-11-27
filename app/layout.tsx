"use client";
import { Header } from "@/components/Header";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "@/components/Footer";
import BootstrapJS from "@/components/BootstrapJS";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head"; // Import Head for managing the head section
import { Open_Sans } from "next/font/google";
// Adjust the path to your Navbar component

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
      <body>
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/images/logo.png" type="image/png" />
        </Head>
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
