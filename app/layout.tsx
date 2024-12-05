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
        <title>PenafortWinery</title>
        <meta
          name="description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PenafortWinery" />
        <meta
          property="og:title"
          content="Nature's Elegance - Growing Essence"
        />
        <meta
          property="og:description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://penafortwinery.com" />
        <meta
          name="twitter:card"
          content="Nature's Elegance - Growing Essence"
        />
        <meta name="robots" content="index, follow" />
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
